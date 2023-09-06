nums = [1,2,3,4,5,2,4,8,7]
newNums = []
isremoved = False

for num in nums:
    if num != 2 or isremoved:
        newNums.append(num)
    else:
        isremoved = True

print(newNums, f'New length: {len(newNums)}')