function likesInfo(arr) {
  switch (arr.length) {
    case arr.length === 1:
      return `${arr[0]} likes this`;

    case arr.length === 2:
      return `${arr[0]} and ${arr[1]} like this`;

    case arr.length === 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;

    case arr.length > 3:
      return `${arr[0]}, ${arr[1]} and ${arr.slice(2).length} like this`;

    default:
      return 'no one likes this';
  }
}

console.log(likesInfo(['Peter']));
