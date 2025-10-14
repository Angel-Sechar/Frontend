// /**
//  *
//  * @param from Object to map from
//  * @param to Object to map to
//  * @returns Mapped object
//  *
//  * Maps properties from 'from' object to 'to' object only if they exist in both objects.
//  * This function performs a shallow copy and does not mutate the original 'to' object.
//  *
//  * Example:
//  * const source = { a: 1, b: 2, c: 3 };
//  * const target = { b: 0, c: 0, d: 0 };
//  * const result = autoMapper(source, target);
//  * // result is { b: 2, c: 3, d: 0 }
//  */
// export function autoMapper<T extends object, U extends object>(from: T, to: U): U {
//   // Makes  a shallow copy of 'to' so it doesn't get mutated
//   const result = { ...to };

//   // Get the keys of 'to' as an array of keyof U
//   const toKeys = Object.keys(to) as (keyof U)[];

//   // Map only the properties that exist in both 'from' and 'to'
//   for (const key of toKeys) {
//     if (key in from) {
//       (result as any)[key] = (from as any)[key];
//     }
//   }

//   return result;
// }
