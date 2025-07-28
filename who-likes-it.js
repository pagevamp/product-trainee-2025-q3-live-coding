function explain(likes){
    switch(likes.length){
        case 0:
            console.log("no one likes");
            break;
        case 1:
            console.log(likes[0], 'likes this');
            break;
        case 2:
            console.log(likes[0],' and ', likes[1], 'like this');
            break;
        case 3:
            console.log(likes[0],', ', likes[1],' and ', likes[2], 'like this');
            break;
        default:
            console.log(likes[0],', ', likes[1], ' and', likes.length-2, ' others like this');
    }
}

explain('');
explain(['Peter']);
explain(['Peter','Jacob']);
explain(['Peter','Jacob','Mark']);
explain(['Peter','Jacob','Mark','Alex','Max']);
