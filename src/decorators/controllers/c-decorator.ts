export function C_router(path: string): ClassDecorator {
    return (target) => {
        Reflect.defineMetadata(
            "controller:path",
            path,
            target
        );
    };
}