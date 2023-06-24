export const truncating = (CourseName, truncateLength) => {
  if (CourseName) {
    return CourseName.length > truncateLength
      ? CourseName.substring(0, truncateLength) + "..."
      : CourseName;
  }
  return CourseName;
};
