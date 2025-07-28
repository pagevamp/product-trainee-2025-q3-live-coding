# Safe lines 

input_str = [76421, 12789, 97621, 13245, 86441, 13679]

def safe_line():
    safe_line_num = int(input("Enter the number:"))
    if(safe_line_num == "76421" || safe_line_num == "13679"):
        print("The given number is safe line")
    else:
        print("The given number is not safe line")

    print("Total number of safe reports are: " input_str.count() )
safe_line()