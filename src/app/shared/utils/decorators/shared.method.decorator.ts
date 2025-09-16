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
      console.log(
        `Method '${propertyKey}' of class '${className}' is called with arguments:`,
        args,
      );
      const result = originalMethod.apply(this, args);
      console.log(`Method '${propertyKey}' of class '${className}' returns:`, result);
      return result;
    },
  };

  return newDescriptor;
}
// TODO: Use the new decorator syntax when upgrading Angular version which supports it ClassMethodDecoratorContext
