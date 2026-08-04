export function CRouter(path: string): ClassDecorator {
    return (target) => {
        Reflect.defineMetadata(
            "controller:path",
            path,
            target
        );
    };
}