
def calculateRainfall(rainfall):
    total=0
    count=0
    if not rainfall:
        print('No rain')
        return 0
    for rain in rainfall:
        if rain<0:
            continue
        else:
            count+=1
            total+=rain
    avg=total/len(rainfall)

    return total, count, avg

    
rainfall= [1,2,3,-1,7,2,-9]

total, count, avg= calculateRainfall(rainfall)
print("Total count of rainfall:",total)
print("Total count of positive int:",count)
print("AVG:",avg)
