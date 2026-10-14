
## Newton形式

　物体の運動は運動方程式を用いることで記述することができるわけだが、中には複数の手順を踏んで解かなければいけない場合が存在する。その代表例として、よく振り子の運動があげれられるため、これについて述べていくことにする。

　振り子の運動というのは、天井から質点を糸で吊るして揺らしたときの運動を指しており、質点の位置を $\bm{r}$、質量を $\bm{r},m$ 、外力として糸の張力 $\bm{T}$、重力 $\bm{G}$ が働いているとすると運動方程式は

$$
    m\dd{^2\bm{r}}{t}=
    \bm{T}+\bm{G}
$$

となる。ここで、各成分に分けて書くと

$$
    m\dd{^2y}{t}=
    -T\sin\theta、
    m\dd{^2x}{t}=
    mg-T\cos\theta
$$

であり、以下の図のように極座標に置き換えて考えると

$$
    m\LR{
        \dd{^2r}
        {t^2}-
        r
        \lr{
        \dd{\theta}
        {t}
        }^2
    }=
    F_x\cos\theta+F_y\sin\theta=
    mg\cos\theta-T
$$
$$
    m\lr{
        2\dd{r}
        {t}
        \dd{\theta}
        {t}+
        r
        \dd{^2\theta}
        {t^2}
    }=
    F_y\cos\theta-F_x\sin\theta=
    -mg\sin\theta
$$

というようになる。振り子の場合、糸は伸び縮みせずに一定の長さ $l$ を保つため動径方向の変化は0であり

$$
    
    T=ml
    \lr{
    \dd{\theta}{t}
    }^2+mg\cos\theta、
    \dd{^2\theta}{t^2}=
    -\frac{g}{l}\sin\theta
$$

という関係式が導かれる。