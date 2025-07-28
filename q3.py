def duplicounter(t):
    data = t
    slower = data.lower()
    countingset = set()
    duplicate = 0
    for char in slower:
        if char in countingset:
            duplicate += 1
        else:
            countingset.add(str(char))

    return duplicate

r = "AaBscf"
duplicounter(r)
