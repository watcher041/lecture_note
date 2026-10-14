
## Lagrange形式

　従来の運動方程式
以前まで、物体の運動は運動方程式を用いて見てきたわけだが、拘束力が働く場合は、その方向とは垂直に運動を行うため結果的に方程式から姿を消すことが多い。そのため、予め拘束力を考える必要がない方程式を考えると便利なように思う。そこで、拘束力 $\bm{R}$ とは垂直の方向に $\delta\bm{r}$ だけの変位（同じ時間で二つの位置の差を測る）を考えると、以下のように仕事が0になることが分かる。
$$
    \bm{R}\cdot\delta\bm{r}=0
$$
これは仮想仕事の原理というように呼ぶ。次に、運動方程式では
$$
    m\frac{\mathrm{d}\bm{v}}{\mathrm{d}t}=
    \bm{R}+\bm{F}
$$
というように拘束力と外力とで力を分けて記載できるため、
$$
    \lr{m\frac{\mathrm{d}\bm{v}}{\mathrm{d}t}-
    \bm{F}}
    \cdot\delta\bm{r}=0
$$
となる。次に、このベクトルが $f$ 個の変数で書けるものとして $\bm{r}(q_1,q_2,\cdots,q_f)$ とすると

$$
    \delta \bm{r}=
    \sum_{i=1}^{f}
    \lr{\frac{\partial \bm{r}}{\partial q_i}}
    \delta q_i
$$

となるので、以下のようになる。
$$
    \sum_{i=1}^{f}
    \left[
        m\frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
        \cdot
        \lr{\frac{\partial \bm{r}}{\partial q_i}}-
        \bm{F}\cdot
        \lr{\frac{\partial \bm{r}}{\partial q_i}}
    \right]\delta q_i=0
$$

ここで、第1辺を整理して

$$
    m\frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
    \cdot
    \lr{\frac{\partial \bm{r}}{\partial q_i}}=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left[
        m\bm{v}\cdot
        \lr{\frac{\partial \bm{r}}{\partial q_i}}
    \right]-
    m\bm{v}\cdot
    \frac{\mathrm{d}}{\mathrm{d}t}
    \lr{\frac{\partial \bm{r}}{\partial q_i}}
$$

とすると、各項目について

$$
    \frac{\partial \bm{v}}{\partial \dot{q}_i}=
    \frac{\partial}{\partial \dot{q}_i}
    \left[
        \sum_{j=1}^{f}
    \lr{\frac{\partial \bm{r}}{\partial q_i}}
    \dot{q}_i+
    \frac{\partial \bm{r}}{\partial t}
    \right]=
    \frac{\partial \bm{r}}{\partial q_i}
$$
$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \lr{\frac{\partial \bm{r}}{\partial q_i}}=
    \sum_{j=1}^{f}
    \frac{\partial}{\partial q_j}
    \lr{\frac{\partial \bm{r}}{\partial q_i}}
    \dot{q}_j+
    \frac{\partial}{\partial t}
     \lr{\frac{\partial \bm{r}}{\partial q_i}}=
     \frac{\partial}{\partial q_i}
     \left[
        \sum_{j=1}^{f}
    \lr{\frac{\partial \bm{r}}{\partial q_j}}
    \dot{q}_j+
    \frac{\partial \bm{r}}{\partial t}
     \right]=
    \frac{\partial \bm{v}}{\partial q_i}
$$
となるため、これらを代入すると以下の通りになる。
$$
    \sum_{i=1}^{f}
    \left[
        \frac{\mathrm{d}}{\mathrm{d}t}
        \frac{\partial}{\partial \dot{q}_i}
        \lr{
            \frac{1}{2}m\bm{v}^2
        }
        -
        \frac{\partial}{\partial q_i}
        \lr{
            \frac{1}{2}m\bm{v}^2
        }
        -
        \bm{F}\cdot
        \lr{\frac{\partial \bm{r}}{\partial q_i}}
    \right]\delta q_i=0
$$
任意の仮想変位に対して成立するためには、中の項目が0になる必要があるため

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \lr{
        \frac{\partial K}{\partial \dot{q}_i}
    }
        -
        \frac{\partial K}{\partial q_i}
        =Q_i　
        (i=1,\cdots,f)
$$
$$
    K=\frac{1}{2}m\bm{v}^2、
    Q_i=\bm{F}\cdot
    \lr{\frac{\partial \bm{r}}{\partial q_i}}
$$
が成り立つ。この運動方程式は一般的な座標に関して成立するものであり、Euler=lagrange方程式と呼ぶ。ただ、通常は力を保存力として
$$
    \bm{F}=-\frac{\partial U}{\partial\bm{r}}
$$
として、一般化力を以下のようにする。
$$
    Q_i=-\frac{\partial U}{\partial\bm{r}}\cdot
    \lr{\frac{\partial \bm{r}}{\partial q_i}}=
    -\frac{\partial U}{\partial q_i}
$$
すると、以下のように書くこともできる。
$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \lr{\frac{\partial L}{\partial \dot{q}_i}}-
    \frac{\partial L}{\partial q_i}=0、
    \frac{\mathrm{d}}{\mathrm{d}t}
    \lr{\frac{\partial U}{\partial \dot{q}_i}}=0
$$
$$
    L=K-U（ラグランジアン）
$$