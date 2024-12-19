
## Newton形式

　質量 $m$ の質点を考えよう。この質点の位置を示すのに、通常は $(X,y,z)$ 座標を用いる。それを太字 $\bm{r}$ で表すと、Newtonの運動方程式は

$$
    m\frac{\mathrm{d}^2\bm{r}}{\mathrm{d}t^2}=
    \bm{F}
$$

と書かれる。ここに右辺の $\bm{F}$ はこの質点に働く力である。これを適当な初期条件のもとに解くと、質点の位置ベクトル $\bm{r}$ が定まる。この式は時間に関して2階の微分を含んでいるから、初期条件としてある条件 $t_0$ における質点の位置と速度の二つを与えるやると、$\bm{r}$ が定まることになる。運動方程式を含む時間微分の数と、初期条件として与えなければならない物理量の数とがこのように常に一致することは周知であろう。

<p align="center">
    <img width="60%" src="images/polar_coordinates.png">
</p>

　今まで、$(x,y,z)$ 座標を用いて粒子を表してきたが、球面極座標 $(r,\theta,\phi)$ を用いて粒子の位置を表すこともできる。これらの関係は、

$$
    x=r\sin\theta\cos\phi、
    y=r\sin\theta\sin\phi、
    z=r\cos\theta
$$

で結ばれているから、運動方程式が

$$
    m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=F_x、
    m\frac{\mathrm{d}^2y}{\mathrm{d}t^2}=F_y、
    m\frac{\mathrm{d}^2z}{\mathrm{d}t^2}=F_z
$$

であることから、まず二階微分の部分を計算してみると以下の通りになる。

$$
\begin{align*}
    \frac{\mathrm{d}^2x}{\mathrm{d}t^2}
    &=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{\mathrm{d}r}{\mathrm{d}t}
        \sin\theta\cos\phi+
        r\frac{\mathrm{d}\theta}{\mathrm{d}t}
        \cos\theta\cos\phi-
        r\frac{\mathrm{d}\phi}{\mathrm{d}t}
        \sin\theta\sin\phi
    \right)\\
    &=
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}
    \sin\theta\cos\phi+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \cos\theta\cos\phi-
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \sin\theta\sin\phi\\
    &+
    r\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}
    \cos\theta\cos\phi-
    r
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
    \sin\theta\cos\phi-
    2r
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \cos\theta\sin\phi\\
    &-
    r
    \frac{\mathrm{d}^2\phi}{\mathrm{d}t^2}
    \sin\theta\sin\phi-
    r
    \left(
        \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \right)^2
    \sin\theta\cos\phi
\end{align*}
$$
$$
\begin{align*}
    \frac{\mathrm{d}^2y}{\mathrm{d}t^2}
    &=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{\mathrm{d}r}{\mathrm{d}t}
        \sin\theta\sin\phi+
        r\frac{\mathrm{d}\theta}{\mathrm{d}t}
        \cos\theta\sin\phi+
        r\frac{\mathrm{d}\phi}{\mathrm{d}t}
        \sin\theta\cos\phi
    \right)\\
    &=
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}
    \sin\theta\sin\phi+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \cos\theta\sin\phi+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \sin\theta\cos\phi\\
    &+
    r\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}
    \cos\theta\sin\phi-
    r
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
    \sin\theta\sin\phi+
    2r
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \cos\theta\cos\phi\\
    &+
    r
    \frac{\mathrm{d}^2\phi}{\mathrm{d}t^2}
    \sin\theta\cos\phi-
    r
    \left(
        \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \right)^2
    \sin\theta\sin\phi
\end{align*}
$$
$$
\begin{align*}
    \frac{\mathrm{d}^2z}{\mathrm{d}t^2}
    &=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \frac{\mathrm{d}r}{\mathrm{d}t}
        \cos\theta-
        r\frac{\mathrm{d}\theta}{\mathrm{d}t}
        \sin\theta
    \right)\\
    &=
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}
    \cos\theta-
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \sin\theta-
    r\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}
    \sin\theta-
    r
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
    \cos\theta
\end{align*}
$$