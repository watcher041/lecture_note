
## 回転運動について

　前回までに単に質点としておけない運動として回転運動を挙げたので、まず簡単に質点が回転している場合はどうなるか見てみよう。

　そもそも回転というのは、ある一点を軸として運動することを言う。そのため、その一点からの位置ベクトルを $\bm{R}$ としてその微小変化を見てみると、

$$
    v_r = 
    \frac{\mathrm{d}r}{\mathrm{d}t}、
    v_\theta = 
    r\frac{\mathrm{d}\theta}{\mathrm{d}t}
$$

となる。例えば、二つの質点があった場合に、角度

<!-- 
実は、二体問題のところで同じものを扱っており、このときにはある一つの地点に向けて力が働き続けていることにより回転運動を行っていた。そこで、ある地点にある質点（質量 $m$ ）の位置ベクトルを $\bm{r}$ として力 $\bm{F}$ を極座標 $(r,\theta)$ により

$$
    \bm{F}=
    f(r,\theta)
    \left(-\frac{\bm{r}}{r}\right)
$$

として運動方程式を二体問題のときと同じように整理してみると、以下の方程式が得られる。

$$
    m\frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    mr
    \left(
        \frac{\mathrm{d}\theta}
        {\mathrm{d}t}
    \right)^2
    =
    -f(r,\theta)
$$
$$
    \frac{\mathrm{d}L}{\mathrm{d}t}=0、
    \left(
        L=mr^2
        \frac{\mathrm{d}\theta}{\mathrm{d}t}=
        \mathrm{const}
    \right)
$$

仮に、何も力が働いていない場合（ $f=0$ ）を考えると、

$$
    m\frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    mr
    \left(
        \frac{\mathrm{d}\theta}
        {\mathrm{d}t}
    \right)^2=
    \frac{L^2}{mr^3}
    \rightarrow
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    \frac{L^2}{m^2r^3}
$$

となるが、この式は両辺に $r$ の時間微分をかけて

$$
    (左辺)=
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    \frac{1}{2}
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{\mathrm{d}r}{\mathrm{d}t}
    \right)^2
$$

$$
    (右辺)=
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{L^2}{m^2r^3}=
    -\frac{1}{2}
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{L^2}{m^2r^2}
    \right)
$$

<!-- 　振り子とは、上図のように質量 $m$ の質点を糸で吊るしたもので揺らすと糸の長さを一定にして一種の回転運動を行う。このときの運動方程式は、張力を $\bm{T}$、重力加速度を $g$ とすると糸と水平な方向に対しては静止（糸の長さが $r$ で一定）であるため

$$
    m
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    T-mg\cos\theta=0
    \leftrightarrow
    T=mg\cos\theta
$$

となり、鉛直方向に対しては重力のみ影響しており

$$
    m
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(r\frac{\mathrm{d}\theta}{\mathrm{d}t}\right)=
    mr
    \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}=
    -mg\sin\theta
$$

となっている。そのため、同じ力が働いていたとしても $r$ によって同じ時間でも移動する距離が違うことになる。 -->