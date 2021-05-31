## 2 x n 타일링

https://programmers.co.kr/learn/courses/30/lessons/12900

#### **코드**

```c++
#include <string>
#include <vector>
#include <string.h>
#define MAX 60002
#define DIV 1000000007
typedef long long ll;
using namespace std;

int solution(int n) {
    int answer = 0;
    ll Mem[2][MAX];
    memset(Mem,0,sizeof(Mem));
    Mem[0][1] = 1;
    
    Mem[0][2] = 1;
    Mem[1][2] = 1;
    for(int i = 3; i<= n;i++){
        Mem[0][i] = (Mem[0][i-1] + Mem[1][i-1]) % DIV;
        Mem[1][i] = (Mem[1][i-2] + Mem[0][i-2]) % DIV;
    }
    answer = (Mem[0][n] + Mem[1][n]) % DIV;
    return answer;
}
```

#### 설명

