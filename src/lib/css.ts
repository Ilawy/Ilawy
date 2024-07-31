export namespace css {
  export namespace animations {
    export interface Animation {
      name: string;
      duration?: number;
      delay?: number;
    }
    export function group(animations: Animation[]) {
      return animations
        .map((animation) => {
          return `${animation.name} ${animation.duration || 1}s ${
            animation.delay || 0
          }s`;
        })
        .join(", ");
    }
  }
}
