export function getEndpoint(path: string): MethodDecorator {

    return (
        target,
        propertyKey,
        descriptor
    ) => {

        Reflect.defineMetadata(
            "route:path",
            path,
            target,
            propertyKey
        );

        Reflect.defineMetadata(
            "route:method",
            "GET",
            target,
            propertyKey
        );
    };
}