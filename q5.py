def ascOrder(arr):
    flag=0
    for i in arr:
        for j in range(len(i)):
            if i[j]>len(i):
                if i[j]>i[j+1]:
                    if flag==0:
                        flag=flag
                else:
                    flag=1

        if flag==0:
            print("Asc")

def dscOrder(arr):
    flag=0
    for i in arr:
        for j in range(len(i)):
            if i[j]>len(i):
                if i[j]<i[j+1]:
                    if flag==0:
                        flag=flag
                else:
                    flag=1

        if flag==0:
            print("dsc")


arr= [[1,2,3,4,5],[9,2,3,4,5],[9,8,6,5,4],]
ascOrder(arr)
dscOrder(arr)
