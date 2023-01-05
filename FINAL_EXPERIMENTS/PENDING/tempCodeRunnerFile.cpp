// uni overload
#include <iostream>
#include <conio.h>

using namespace std;

class dis{
    public:
        int x;
        int operator -(){
            int result = 1;
            for(int i=1; i<=x; i++){
                result = result * i;
            }
            return result;
        }
};

int main(){
    dis obj;
    obj.x = 5;
    cout<<-obj.x;
    return 0;
}