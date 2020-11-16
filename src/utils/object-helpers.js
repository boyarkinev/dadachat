export const updateObjectInArray = (items, itemId, objectPropName, newObjProps) => {
  
  return items.map((user) => {
    if (user[objectPropName] === itemId) {
      return { ...user, ...newObjProps };
    }
    return user;
  })
}