def Roster():
    chosen = int(input("1. Add Student's name for grade \n2. Get a list of students in a grade \n3. Get a list of all students in all grade. \nChoose your option: "))
    if(chosen == 1):
        addGrade()
    elif(chosen == 2):
        addStudent()
    else:
        listStudents()


def addGrade():
    grade = int(input("Enter the grade to add a student: "))
    

def addStudent():
    pass

def listStudents():
    pass


Roster()