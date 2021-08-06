## **K번째수**

https://programmers.co.kr/learn/courses/30/lessons/42748

#### **코드**

```c++
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int sort_res(vector<int> source, int idx){
    sort(source.begin(), source.end());
    return source[idx - 1];
}
vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    for(int i = 0 ; i < commands.size();i++){
        vector<int> temp;
        for(int j = commands[i][0]; j <= commands[i][1]; j++){
            temp.push_back(array[j - 1]);
        }
        answer.push_back(sort_res(temp, commands[i][2]));
    }
    
    return answer;
}
```

#### 설명

