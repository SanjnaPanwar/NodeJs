# from re import I

# n=6
# def printTribeRec(n):
#     if(n==0 or n==1 or n==2):
#         return 0
#     if(n==3):
#         return 1
#     else:
#         return printTribeRec((n-1) + printTribeRec(n-2)+ printTribeRec(n-3))
# # printTribeRec(6)
# def printTribe(n):
#     for x in range(1,n):
#         print(printTribe(x))
# # printTribe(6)


# def fib(n):
#     if(n<=1):
#         return n
#     else:
#         return fib(n-1)+fib(n-2)
# print(fib(6))


def fun(a,b):
    if(b==0):
        return a
    else:
        return fun(b,a%b)
an=fun(100,2000)
print(an)