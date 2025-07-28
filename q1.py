def rainfall(r):
    total = 0
    count = 0.0
    for record in r:
        if record>0:
            total += record
            count += 1.0
    if total>0:
        return (total/count)
    else:
        return("No Rain")
    
    
# a = [1,2,3,4]
# b = [-1,1,2,3]

# print(rainfall(a))
# print(rainfall(b))