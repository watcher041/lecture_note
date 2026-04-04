
## Lagrange形式

　従来の運動方程式
以前まで、物体の運動は運動方程式を用いて見てきたわけだが、拘束力が働く場合は、その方向とは垂直に運動を行うため結果的に方程式から姿を消すことが多い。そのため、予め拘束力を考える必要がない方程式を考えると便利なように思う。そこで、拘束力 $\boldsymbol{R}$ とは垂直の方向に $\delta\boldsymbol{r}$ だけの変位（同じ時間で二つの位置の差を測る）を考えると、以下のように仕事が0になることが分かる。
$$
    \boldsymbol{R}\cdot\delta\boldsymbol{r}=0
$$
これは仮想仕事の原理というように呼ぶ。次に、運動方程式では
$$
    m\frac{\mathrm{d}\boldsymbol{v}}{\mathrm{d}t}=
    \boldsymbol{R}+\boldsymbol{F}
$$
というように拘束力と外力とで力を分けて記載できるため、
$$
    \left(m\frac{\mathrm{d}\boldsymbol{v}}{\mathrm{d}t}-
    \boldsymbol{F}\right)
    \cdot\delta\boldsymbol{r}=0
$$
となる。次に、このベクトルが $f$ 個の変数で書けるものとして $\boldsymbol{r}(q_1,q_2,\cdots,q_f)$ とすると

$$
    \delta \boldsymbol{r}=
    \sum_{i=1}^{f}
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
    \delta q_i
$$

となるので、以下のようになる。
$$
    \sum_{i=1}^{f}
    \left[
        m\frac{\mathrm{d}\boldsymbol{v}}{\mathrm{d}t}
        \cdot
        \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)-
        \boldsymbol{F}\cdot
        \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
    \right]\delta q_i=0
$$

ここで、第1辺を整理して

$$
    m\frac{\mathrm{d}\boldsymbol{v}}{\mathrm{d}t}
    \cdot
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left[
        m\boldsymbol{v}\cdot
        \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
    \right]-
    m\boldsymbol{v}\cdot
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
$$

とすると、各項目について

$$
    \frac{\partial \boldsymbol{v}}{\partial \dot{q}_i}=
    \frac{\partial}{\partial \dot{q}_i}
    \left[
        \sum_{j=1}^{f}
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
    \dot{q}_i+
    \frac{\partial \boldsymbol{r}}{\partial t}
    \right]=
    \frac{\partial \boldsymbol{r}}{\partial q_i}
$$
$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)=
    \sum_{j=1}^{f}
    \frac{\partial}{\partial q_j}
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
    \dot{q}_j+
    \frac{\partial}{\partial t}
     \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)=
     \frac{\partial}{\partial q_i}
     \left[
        \sum_{j=1}^{f}
    \left(\frac{\partial \boldsymbol{r}}{\partial q_j}\right)
    \dot{q}_j+
    \frac{\partial \boldsymbol{r}}{\partial t}
     \right]=
    \frac{\partial \boldsymbol{v}}{\partial q_i}
$$
となるため、これらを代入すると以下の通りになる。
$$
    \sum_{i=1}^{f}
    \left[
        \frac{\mathrm{d}}{\mathrm{d}t}
        \frac{\partial}{\partial \dot{q}_i}
        \left(
            \frac{1}{2}m\boldsymbol{v}^2
        \right)
        -
        \frac{\partial}{\partial q_i}
        \left(
            \frac{1}{2}m\boldsymbol{v}^2
        \right)
        -
        \boldsymbol{F}\cdot
        \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
    \right]\delta q_i=0
$$
任意の仮想変位に対して成立するためには、中の項目が0になる必要があるため

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{\partial K}{\partial \dot{q}_i}
    \right)
        -
        \frac{\partial K}{\partial q_i}
        =Q_i　
        (i=1,\cdots,f)
$$
$$
    K=\frac{1}{2}m\boldsymbol{v}^2、
    Q_i=\boldsymbol{F}\cdot
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)
$$
が成り立つ。この運動方程式は一般的な座標に関して成立するものであり、Euler=lagrange方程式と呼ぶ。ただ、通常は力を保存力として
$$
    \boldsymbol{F}=-\frac{\partial U}{\partial\boldsymbol{r}}
$$
として、一般化力を以下のようにする。
$$
    Q_i=-\frac{\partial U}{\partial\boldsymbol{r}}\cdot
    \left(\frac{\partial \boldsymbol{r}}{\partial q_i}\right)=
    -\frac{\partial U}{\partial q_i}
$$
すると、以下のように書くこともできる。
$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(\frac{\partial L}{\partial \dot{q}_i}\right)-
    \frac{\partial L}{\partial q_i}=0、
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(\frac{\partial U}{\partial \dot{q}_i}\right)=0
$$
$$
    L=K-U（ラグランジアン）
$$