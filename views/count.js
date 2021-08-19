function wordCount(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    count = str.split(' ').lenght;
    return count;
}

console.log(wordCount(ac));
