def likeDisplay(likes):
    if not likes:
        print("no one likes this")
    else:
        if len(likes)==1:
            print(likes[0],"likes this")
        if len(likes)==2:
            print(likes[0],"and",likes[1],"like this")
        if len(likes)>2:
            print(likes[0],", ",likes[1]," and ",len(likes)-2," others like this")
likes=["Alex", "Vera","Deep","Anup"]
likeDisplay(likes)
