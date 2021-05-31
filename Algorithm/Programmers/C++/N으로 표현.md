## N으로 표현

https://programmers.co.kr/learn/courses/30/lessons/42895

#### **코드**

```c++
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
int global_N, global_number;
int temp_answer;
void calc(int sum_value, int dep){
    if(dep > 8) return;
    
    if(sum_value == global_number){
        temp_answer = min(temp_answer, dep);
        return;
    }
    int temp = 0;
    
    for(int i = 1; i< 8;i++){
        temp*=10;
        temp+=global_N;
        
        calc(sum_value + temp, dep + i);
        calc(sum_value - temp, dep + i);
        calc(sum_value * temp, dep + i);
        calc(sum_value / temp, dep + i);
    }
    return;
}
int solution(int N, int number) {
    int answer = 0;
    global_N = N;
    global_number = number;
    temp_answer = 9;
    calc(0,0);
    answer = temp_answer;
    if(answer > 8) answer = -1;
    return answer;
}
```

#### 설명

