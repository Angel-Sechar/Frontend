export function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  const newDescriptor: PropertyDescriptor = {
    ...descriptor,
    value(...args: any[]) {
      const className = this.constructor.name;
      console.log(`Method '${propertyKey}' of class '${className}' is called with arguments:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Method '${propertyKey}' of class '${className}' returns:`, result);
      return result;
    },
  };

  return newDescriptor;
}
// TODO: Change for new decorator syntax ClassMethodDecoratorContext (not supported in Angular 18)
