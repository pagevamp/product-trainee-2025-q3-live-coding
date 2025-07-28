def like_explainer(l):
    leng = len(l)
    if not l:
        return "no one likes this"
    if leng == 1:
        return l[0] + ' likes this'
    if leng == 2:
        return l[0] + 'and' +l[1] +' likes this'
    if leng > 2:
        return (l[0] + ',' + l[1] + ' and ' + (leng - 2) + 'likes this')
    
m = ["Ram", "H", "K", "M"]

like_explainer(m)