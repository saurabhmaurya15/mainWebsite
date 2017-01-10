/*  Niki.ai Assignment Task-1
    Author: Saurabh Maurya
*/
#include<iostream>
#include <algorithm>
#include <vector>
#define MAX_SIZE 10004
using namespace std;
template<typename T>

/*  Print Array Values
    Generic Function prints values of any type of array
    @param arr <any> array of template type
    @param size integer length of array
    @return void
*/
void printArrayValues(T arr[], int size){
    for(int i=0; i<size; i++){
        cout<<arr[i]<<endl;
    }
}
/*  Sort compare Function
    string compare function
    @param i String
    @param j String
    @return boolean
*/
bool compareFunction(string i,string j)
{
    return (i.length()<j.length());
}
/*  Sort String Array
    sorts string array based on length of string items in array
    Time Complexity: O(n * Log n)
    where n is the number of items in string array
    @param arr String Array
    @param n integer length of string array
    @return void
*/
void sortStrArrayOnLength(string arr[], int n){
    sort(arr,arr + n , compareFunction);
}
/*  main function
*/
int main(){
    int n;
    string arr[MAX_SIZE];
    cout<<"Enter total number of strings"<<endl;
    cin>>n;
    cout<<"Enter strings"<<endl;
    for(int i =0 ;i < n ; i++){
        cin>>arr[i];
    }
    cout<<endl;
    sortStrArrayOnLength(arr, n);
    cout<<"Sorted Strings are"<<endl;
    printArrayValues(arr, n);
    return 0;
}
