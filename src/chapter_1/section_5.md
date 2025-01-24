
## 回転運動について

　前回までに単に質点としておけない運動として回転運動を挙げたので、まず簡単に振り子の運動を見ていくことにする。

　振り子とは、上図のように質量 $m$ の質点を糸で吊るしたもので揺らすと糸の長さを一定にして一種の回転運動を行う。このときの運動方程式は、張力を $\bm{T}$、重力加速度を $g$ とすると糸と水平な方向に対しては静止（糸の長さが $r$ で一定）であるため

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

となっている。そのため、同じ力が働いていたとしても $r$ によって同じ時間でも移動する距離が違うことになる。