const arr = [3, 7, 8, 4];

var i, j, temp;

for(i = 0; i < 4; i++)
{
    for(j = i + 1; j < 4; j++)
    {
        if(arr[i] > arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);


