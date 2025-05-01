
## 回転運動について

　ここからは、どのように回転運動を扱うのかを見ていくことにしよう。まず、回転というのはある一点を軸にその周囲を運動することを言う。その様子を記述する場合ちょうど二体問題で扱った極座標が便利であるため、これを用いることにする。すなわち、通常の運動方程式は直交座標系を用いて

$$
    m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=
    F_x、
     m\frac{\mathrm{d}^2y}{\mathrm{d}t^2}=
    F_y
$$

であるが、これを以下の極座標におきかえるとどうなるかを見ていく。

$$
    x=r\cos\theta、
    y=r\sin\theta
$$

まず、各方向の加速度を計算すると、

$$
    \frac{\mathrm{d}^2x}{\mathrm{d}t^2}=
    \frac{\mathrm{d}^2r}
    {\mathrm{d}t^2}
    \cos\theta-
    2\frac{\mathrm{d}r}
    {\mathrm{d}t}
    \frac{\mathrm{d}\theta}
    {\mathrm{d}t}
    \sin\theta-
    r
    \frac{\mathrm{d}^2\theta}
    {\mathrm{d}t^2}
    \sin\theta-
    r
    \left(
    \frac{\mathrm{d}\theta}
    {\mathrm{d}t}
    \right)^2
    \cos\theta
$$
$$
     \frac{\mathrm{d}^2y}{\mathrm{d}t^2}=
     \frac{\mathrm{d}^2r}
    {\mathrm{d}t^2}
    \sin\theta+
    2\frac{\mathrm{d}r}
    {\mathrm{d}t}
    \frac{\mathrm{d}\theta}
    {\mathrm{d}t}
    \cos\theta+
    r
    \frac{\mathrm{d}^2\theta}
    {\mathrm{d}t^2}
    \cos\theta-
    r
    \left(
    \frac{\mathrm{d}\theta}
    {\mathrm{d}t}
    \right)^2
    \sin\theta
$$

となるが、ここで極座標 $r,\theta$ の二階微分のみが含まれるよう以下のように整理してみる。

$$
    m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}
    \cos\theta+
    m\frac{\mathrm{d}^2y}{\mathrm{d}t^2}
    \sin\theta=
    m\left[
        \frac{\mathrm{d}^2r}
        {\mathrm{d}t^2}-
        r
        \left(
        \frac{\mathrm{d}\theta}
        {\mathrm{d}t}
        \right)^2
    \right]=
    F_x\cos\theta+F_y\sin\theta
$$
$$
    -m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}
    \sin\theta+
    m\frac{\mathrm{d}^2y}{\mathrm{d}t^2}
    \cos\theta=
    m\left(
        2\frac{\mathrm{d}r}
        {\mathrm{d}t}
        \frac{\mathrm{d}\theta}
        {\mathrm{d}t}+
        r
        \frac{\mathrm{d}^2\theta}
        {\mathrm{d}t^2}
    \right)=
    -F_x\sin\theta+F_y\cos\theta
$$

ここで、各式の右辺の力を以下の図で見てみると極座標の各成分の力になっていることが分かる（$F_r$ に関しては赤線と青線の長さを足したもの、$F_\theta$ については 青線から赤線を引いた長さになっている）。

$$
    F_r=F_x\cos\theta+F_y\sin\theta、
    F_\theta=F_y\cos\theta-F_x\sin\theta
$$

<p align="center">
    <img width="44%"  
        style="background-color:white;"
        src="images/polor-2d_force.png">
    <img width="40%"  
        style="background-color:white;"
        src="images/2d_force_change.png">
</p>

そのため、先ほどの式は極座標の各成分の運動方程式になっていることが分かる。

$$
    m\left[
        \frac{\mathrm{d}^2r}
        {\mathrm{d}t^2}-
        r
        \left(
        \frac{\mathrm{d}\theta}
        {\mathrm{d}t}
        \right)^2
    \right]=F_r、
    m\left(
        2\frac{\mathrm{d}r}
        {\mathrm{d}t}
        \frac{\mathrm{d}\theta}
        {\mathrm{d}t}+
        r
        \frac{\mathrm{d}^2\theta}
        {\mathrm{d}t^2}
    \right)=F_\theta
$$

これらの式を詳しく見ていくと、動径方向については

$$
    m\frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    F_r+f_{r,\theta}、
    f_{r,\theta}=
    mr
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
$$

というように、通常の運動方程式にあたかも力 $f_{r,\theta}$ （遠心力）が遠ざかる方向に加わった形になっている。次に、角度方向については二体問題と同じように $r$ をかけて整理すると

$$
    \frac{\mathrm{d}L}{\mathrm{d}t}=
    rF_\theta、
    L=
    mr^2\frac{\mathrm{d}\theta}{\mathrm{d}t}
$$

というように $L$ を用いて書ける。ここで回転する条件を考えたとき、角度方向に動いていれば回転することから角度の時間微分（**角速度**）が常に0でないものと思われる。そこで、角速度を $\omega$ として先ほどの式を表記し直すと

$$
    f_{r,\theta}=
    mr\omega^2、
    L=mr^2\omega
$$

となるが、このうち $L$ は従来の運動量が質量（慣性質量）と速度の掛け算であったことを踏まえ

$$
    L=I\omega、
    I=mr^2
$$

というように $I$（**慣性モーメント**）を用いると、$L$ は角度方向の運動量（**角運動量**）として扱うことができる。すると、$rF_\theta$ は回転運動を変化させる量として $N$（**モーメント**）としてみなすことができ、

$$
    \frac{\mathrm{d}L}{\mathrm{d}t}=N、
    L=I\omega、N=rF_\theta
$$

というように回転の運動方程式として記述される。ここで、$N$ について詳しく見るために直交座標系で書くと

$$
    N=rF_\theta=
    r\cos\theta F_y - r\sin\theta F_x =
    xF_y - yF_x 
$$

となるが、これは外積と呼ばれる関係になっていることが予想される。例えば、以下のようにベクトル $\bm{a}=(a_x,a_y,0)、\bm{b}=(b_x,b_y,0)$ がある場合、外積 $\bm{c}$ は以下の形で表される。

$$
    \bm{c}=\bm{a}\times\bm{b}=
    (0,0,a_xb_y-a_yb_x)
$$

<p align="center">
    <img width="44%"  
        style="background-color:white;"
        src="images/cross_product.png">
</p>

試しに $\bm{a}=\bm{r},\bm{b}=\bm{F}$ として外積をとると、以下の通り $z$ 成分が先ほどの $N$ と一致していることが分かる。

$$
    \bm{r}\times\bm{F}=
    (0,0,xF_y-yF_x)=
    (0,0,N)
$$

また、外積で得たベクトルは元となったベクトルと直交しており、実際以下の関係が成り立つことからも伺える。

$$
    \bm{r}\cdot
    (\bm{r}\times\bm{F})=0、
    \bm{F}\cdot
    (\bm{r}\times\bm{F})=0
$$

そのため、回転方向については $z$ 成分に関する方程式になっていると考えられる。そこで、運動方程式

$$
    m\frac{\mathrm{d}\bm{v}}{\mathrm{d}t}=\bm{F}
$$

に外積をとることで一般的に回転の運動方程式がどのようになるかを見てみることにする。まず、両辺に $\bm{r}$ と外積をとると

$$
    m
    \left(
    \bm{r}\times
    \frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
    \right)
    =\bm{N}、
    \bm{N} = \bm{r}\times\bm{F}
$$

というように右辺がモーメント $\bm{N}$ となるので、左辺を変形してみると

$$
    \left(
    \bm{r}\times
    \frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
    \right)=
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\bm{r}\times\bm{v})-
    (\bm{v}\times\bm{v})=
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\bm{r}\times\bm{v})
$$

となるので以下の通りになる。

$$
    m
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\bm{r}\times\bm{v})=
    \bm{N}
$$

そして、左辺を極座標で整理することで

$$
    m(\bm{r}\times\bm{v})=
    \left(
        0,0,
        mx
        \frac{\mathrm{d}y}{\mathrm{d}t}-
        my
        \frac{\mathrm{d}x}{\mathrm{d}t}
    \right)=
    I\bm{\omega}、
    \bm{\omega}=(0,0,\omega)
$$

というように角運動量 $L$ の $z$ 成分と同じ形になっていることが分かる。また、各外積の値の直交関係を見てみると

$$
    \bm{r}\cdot\bm{L}=0、
    \bm{v}\cdot\bm{L}=0、
    \bm{r}\cdot\bm{N}=0、
    \bm{F}\cdot\bm{N}=0
$$

というようになっていることも直ちに求められる。そのため、最終的に回転に関する運動方程式は以下の通りになる。

$$
    m\frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    F_r+f_{r,\theta}、
    f_{r,\theta}=
    mr\omega^2
$$
$$
    \frac{\mathrm{d}\bm{L}}
    {\mathrm{d}t}=
    \bm{N}、
    \bm{L}=
    m(\bm{r}\times\bm{v})=
    I\bm{\omega}、
    \bm{N}=\bm{r}\times\bm{F}
$$

ここまでのことは2次元の範囲であったため、今度は3次元でも成立するかを見てみる。まず、直交座標系 $(x,y,z)$ と極座標 $(r,\theta,\phi)$ が

$$
    x=r\sin\theta\cos\phi、
    y=r\sin\theta\sin\phi、
    z=r\cos\theta
$$

という関係にあることから、各成分の加速度を求めると

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
        2\frac{\mathrm{d}r}{\mathrm{d}t}
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
        \cos\theta\cos\phi-
        2\frac{\mathrm{d}r}{\mathrm{d}t}
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
        2r\frac{\mathrm{d}\theta}{\mathrm{d}t}
        \frac{\mathrm{d}\phi}{\mathrm{d}t}
        \cos\theta\sin\phi\\
        &-
        r\frac{\mathrm{d}^2\phi}{\mathrm{d}t^2}
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
        2\frac{\mathrm{d}r}{\mathrm{d}t}
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
        \cos\theta\sin\phi+
        2\frac{\mathrm{d}r}{\mathrm{d}t}
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
        2r\frac{\mathrm{d}\theta}{\mathrm{d}t}
        \frac{\mathrm{d}\phi}{\mathrm{d}t}
        \cos\theta\cos\phi\\
        &+
        r\frac{\mathrm{d}^2\phi}{\mathrm{d}t^2}
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
        2\frac{\mathrm{d}r}{\mathrm{d}t}
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

となる。これらの式を見比べることで、極座標の各成分ごとの加速度を取り出してみると

$$
    \left(
        \frac{\mathrm{d}^2x}{\mathrm{d}t^2}
        \cos\phi+
        \frac{\mathrm{d}^2y}{\mathrm{d}t^2}
        \sin\phi
    \right)
    \sin\theta+
    \frac{\mathrm{d}^2z}{\mathrm{d}t^2}
    \cos\theta=
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    r
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2-
    r
    \left(
        \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \right)^2
    \sin^2\theta
$$
$$
    \left(
        \frac{\mathrm{d}^2x}{\mathrm{d}t^2}
        \cos\phi+
        \frac{\mathrm{d}^2y}{\mathrm{d}t^2}
        \sin\phi
    \right)
    \cos\theta-
    \frac{\mathrm{d}^2z}{\mathrm{d}t^2}
    \sin\theta=
    r
    \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}-
    r
    \left(
        \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \right)^2
    \sin\theta\cos\theta
$$
$$
    -\frac{\mathrm{d}^2x}{\mathrm{d}t^2}
    \sin\phi+
    \frac{\mathrm{d}^2y}{\mathrm{d}t^2}
    \cos\phi=
    r
    \frac{\mathrm{d}^2\phi}{\mathrm{d}t^2}
    \sin\theta+
    2r
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \cos\theta+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \sin\theta
$$

となる。そのため、極座標での各成分の運動方程式は

$$
    v_r=
    \left(
        \frac{\mathrm{d}r}{\mathrm{d}t}
    \right)、
    \omega_\theta=
     \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)、
    \omega_\phi=
     \left(
        \frac{\mathrm{d}\phi}{\mathrm{d}t}
    \right)
$$

とすると、以下の通りになる。

$$
    m\frac{\mathrm{d}v_r}{\mathrm{d}t}-
    mr\omega_\theta^2-
    mr\omega_\phi^2\sin^2\theta=
    \left(
        F_x\cos\phi+
        F_y\sin\phi
    \right)
    \sin\theta+
    F_z\cos\theta
$$
$$
    mr
    \frac{\mathrm{d}\omega_\theta}{\mathrm{d}t}+
    2mv_r\omega_\theta-
    mr\omega_\phi^2\sin\theta\cos\theta=
    \left(
        F_x\cos\phi+
        F_y\sin\phi
    \right)
    \cos\theta-
    F_z\sin\theta
$$
$$
    mr
    \frac{\mathrm{d}\omega_\phi}{\mathrm{d}t}
    \sin\theta+
    2mr\omega_\theta\omega_\phi\cos\theta+
    2mv_r\omega_\phi\sin\theta=
    -F_x\sin\phi+
    F_y\cos\phi
$$

ここで、2次元のときの力の関係式を踏まえると

$$
    F_{x,y}=
    F_x\cos\phi+F_y\sin\phi、
    F_\phi=
    F_y\cos\phi-F_x\sin\phi
$$

というように $x,y$ 平面上の動径 $r_{x,y}$ 方向および角度 $\phi$ 方向の力と、動径 $r$ 方向と角度 $\theta$ 方向の力も

$$
    F_r=
    F_z\cos\theta+
    F_{x,y}\sin\theta、
    F_\theta=
    F_{x,y}\cos\theta-
    F_z\sin\theta
$$

という関係にあることから、最終的に以下の形になる。

$$
    m\frac{\mathrm{d}v_r}{\mathrm{d}t}-
    mr\omega_\theta^2-
    mr\omega_\phi^2\sin^2\theta=
    F_r
$$
$$
    mr
    \frac{\mathrm{d}\omega_\theta}{\mathrm{d}t}+
    2mv_r\omega_\theta-
    mr\omega_\phi^2\sin\theta\cos\theta=
    F_\theta
$$
$$
    mr
    \frac{\mathrm{d}\omega_\phi}{\mathrm{d}t}
    \sin\theta+
    2mr\omega_\theta\omega_\phi\cos\theta+
    2mv_r\omega_\phi\sin\theta=
    F_\phi
$$

ここで、動径方向の運動方程式を整理すると

$$
    m\frac{\mathrm{d}v_r}{\mathrm{d}t}-
    \left(
        mr\omega_\theta^2+
        mr\omega_\phi^2\sin^2\theta
    \right)=
    F_r
$$

となるが、括弧内の部分は遠心力となっている。実際、$x,y$ 平面上での遠心力は

$$
    f_{x,y}=
    m(r\sin\theta)\omega_\phi^2
$$

であり、先ほどの動径方向の関係式を利用すると

$$
    f_{r,\phi}=
    F_z\cos\theta+
    F_{x,y}\sin\theta=
    0+f_{x,y}\sin\theta=
    mr\omega_\phi^2\sin^2\theta
$$

というように、第2項目の力になっていることが分かる。第１項目については、$x,y$ と $z$ 平面での遠心力となるため、

$$
    f_{r,\theta}=
    mr\omega_\theta^2
$$

であるから、動径方向については以下のようになると思われる。

$$
    m\frac{\mathrm{d}v_r}{\mathrm{d}t}=
    F_r+
    (f_{r,\theta}+f_{r,\phi})、
    f_{r,\theta}=
    mr\omega_\theta^2、
    f_{r,\phi}=
    [m(r\sin\theta)\omega_\phi^2]\sin\theta
$$


このことからも伺えるように $\theta$ の方向には $r$ 、$\phi$ の方向には $r\sin\theta$ の位置で回転することから

$$
    L_\theta=
    mr^2\omega_\theta、
    L_\phi=
    m(r\sin\theta)^2\omega_\phi
$$

と角運動量おき、これらを微分してみると

$$
    \frac{\mathrm{d}L_\theta}{\mathrm{d}t}
    =
    r\left(
    mr
    \frac{\mathrm{d}\omega_\theta}{\mathrm{d}t}+
    2mv_r\omega_\theta
    \right)=
    r
    \left(
        F_\theta+
        mr\omega_\phi^2\sin\theta\cos\theta
    \right)
$$
$$
    \frac{\mathrm{d}L_\phi}{\mathrm{d}t}
    =
    r\sin\theta
    \left(
    mr
    \frac{\mathrm{d}\omega_\phi}{\mathrm{d}t}
    \sin\theta+
    2mr\omega_\theta\omega_\phi\cos\theta+
    2mv_r\omega_\phi\sin\theta
    \right)=
    r\sin\theta F_\phi
$$

$\theta$ 方向の第二項目については、$\phi$ 方向の回転に対する遠心力の $\theta$ 方向の成分であり、実際

$$
    f_{\theta,\phi}=
    F_{x,y}\cos\theta-
    F_z\sin\theta=
    m(r\sin\theta)\omega_\phi^2\cos\theta+0=
    mr\omega_\phi^2\sin\theta\cos\theta
$$

となることからも分かる。以上のことから、以下の形にまとめられることが分かる。

$$
    m\frac{\mathrm{d}v_r}{\mathrm{d}t}=
    F_r+
    (f_{r,\theta}+f_{r,\phi})、
    f_{r,\theta}=
    mr\omega_\theta^2、
    f_{r,\phi}=
    [m(r\sin\theta)\omega_\phi^2]\sin\theta
$$
$$
    \frac{\mathrm{d}L_\theta}{\mathrm{d}t}
    =
    r(F_\theta+f_{\theta,\phi})、
    L_\theta=
    mr^2\omega_\theta、
    f_{\theta,\phi}=
    [m(r\sin\theta)\omega_\phi^2]\cos\theta
$$
$$
    \frac{\mathrm{d}L_\phi}{\mathrm{d}t}
    =
    r\sin\theta F_\phi、
    L_\phi=
    m(r\sin\theta)^2\omega_\phi
$$

ここで $L_\theta$ と $L_\phi$ の関係式が

$$
    \frac{\mathrm{d}\bm{L}}{\mathrm{d}t}=
    \bm{N}、
    \bm{L}=(\bm{r}\times\bm{v})、
    \bm{N}=\bm{r}\times\bm{F}
$$

に対応しているか見てみよう。まず、角運動量が直交座標系において

$$
    L_x=m(yv_z-zv_y)、
    L_y=m(zv_x-xv_z)、
    L_z=m(xv_y-yv_x)
$$

となるが、各速度が極座標により

$$
    v_x=
    v_r\sin\theta\cos\phi+
    r\omega_\theta\cos\theta\cos\phi-
    r\omega_\phi\sin\theta\sin\phi
$$
$$
    v_y=
    v_r\sin\theta\sin\phi+
    r\omega_\theta\cos\theta\sin\phi+
    r\omega_\phi\sin\theta\cos\phi
$$
$$
    v_z=
    v_r\cos\theta-
    r\omega_\theta\sin\theta
$$

と書けるため、以下の通りになる。

$$
    L_x=m(yv_z-zv_y)=
    -mr^2
    (
        \omega_\theta\sin\phi+
        \omega_\phi\sin\theta\cos\theta\cos\phi
    )
$$
$$
    L_y=m(zv_x-xv_z)=
    mr^2
    (
        \omega_\theta\cos\phi-
        \omega_\phi\sin\theta\cos\theta\sin\phi
    )
    
$$
$$
    L_z=m(xv_y-yv_x)=
    mr^2\omega_\phi\sin^2\theta
$$

これらを整理すると

$$
    -L_x\sin\phi+L_y\cos\phi=
    mr^2\omega_\theta
$$
$$
    L_x\cos\phi+L_y\sin\phi=
    -mr^2\omega_\phi\sin\theta\cos\theta
$$
$$
    L_z=mr^2\omega_\phi\sin^2\theta
$$

となるが、ここで先ほどの極座標における角運動量と見比べてみると

$$
    L_\theta=
    -L_x\sin\phi+L_y\cos\phi、
    L_\phi=L_z
$$

という関係があると予想される。確認のため、それぞれ時間微分をとってみるとまず $L_\theta$ については

$$
    \frac{\mathrm{d}L_\theta}{\mathrm{d}t}=
    \left(
        -\frac{\mathrm{d}L_x}{\mathrm{d}t}
        \sin\phi+
        \frac{\mathrm{d}L_y}{\mathrm{d}t}
        \cos\phi
    \right)-
    \omega_\phi
    (L_x\cos\phi+L_y\sin\phi)
$$

であるが、ここで回転の運動方式から角運動量の時間微分に関して

$$
    \frac{\mathrm{d}L_x}{\mathrm{d}t}=
    yF_z-zF_y、
    \frac{\mathrm{d}L_y}{\mathrm{d}t}=
    zF_x-xF_z、
    \frac{\mathrm{d}L_z}{\mathrm{d}t}=
    xF_y-yF_x
$$

が成り立つため、これらを代入すると

$$
    \frac{\mathrm{d}L_\theta}{\mathrm{d}t}=
    z(-F_y\sin\phi+F_x\cos\theta)-
    F_z(y\sin\phi+x\cos\phi)-
    \omega_\phi
    (L_x\cos\phi+L_y\sin\phi)
$$

となる。ここで、今までの関係式と見比べてみると

$$
    -F_y\sin\phi+F_x\cos\theta=F_{x,y}
$$
$$
    y\sin\phi+x\cos\phi=r\sin\theta、
    z=r\cos\theta
$$
$$
    L_x\cos\phi+L_y\sin\phi=
    -mr^2\omega_\phi\sin\theta\cos\theta
$$

であるから以下の通りとなる。

$$
    \frac{\mathrm{d}L_\theta}{\mathrm{d}t}=
    r(F_{x,y}\cos\theta-F_z\sin\theta)+
    mr^2\omega_\phi^2\sin\theta\cos\theta=
    rF_\theta+
    mr^2\omega_\phi^2\sin\theta\cos\theta
$$

そして、$L_\phi$ の時間微分については、

$$
    \frac{\mathrm{d}L_\phi}{\mathrm{d}t}=
    \frac{\mathrm{d}L_z}{\mathrm{d}t}=
    xF_y-yF_x
$$

となるため、ここで

$$
    x=r\sin\theta\cos\phi、
    y=r\sin\theta\sin\phi、
    F_\phi=F_y\cos\phi-F_x\sin\phi
$$

を踏まえて整理すると

$$
    \frac{\mathrm{d}L_\phi}{\mathrm{d}t}=
    r\sin\theta
    (F_y\cos\phi-F_x\sin\phi)=
    r\sin\theta F_\phi
$$

となる。そのため、3次元においても回転の運動方程式

$$
    \frac{\mathrm{d}\bm{L}}{\mathrm{d}t}=
    \bm{N}
$$

が成り立つことが分かる。

このことを踏まえて、今度は角運動量が角速度でどのように表記されるか見てみよう。そのため、改めて

$$
    -L_x\sin\phi+L_y\cos\phi=L_\theta、
    L_z=L_\phi
$$
$$
    L_x\cos\phi+L_y\sin\phi=
    -mr^2\omega_\phi\sin\theta\cos\theta
$$

に着目してみると、これらは力の関係

$$
    F_{x,y}=
    F_x\cos\phi+F_y\sin\phi、
    F_\phi=
    F_y\cos\phi-F_x\sin\phi
$$

と見比べてみても分かるように以下のように対応している物と思われる。
$$
    L_x\cos\phi+L_y\sin\phi=
    -mr^2\omega_\phi\sin\theta\cos\theta
    \leftrightarrow
    F_{x,y}=
    F_x\cos\phi+F_y\sin\phi
    
$$
$$
    -L_x\sin\phi+L_y\cos\phi=
    mr^2\omega_\theta
    \leftrightarrow
    F_\phi=
    F_y\cos\phi-F_x\sin\phi
$$

そのため、角運動量においても以下のように書けることになる。

$$
    L_x\cos\phi+L_y\sin\phi=L_{x,y}、
    -L_x\sin\phi+L_y\cos\phi=L_\theta、
    L_z=L_\phi
$$
$$
    L_{x,y}=
    -mr^2\omega_\phi\sin\theta\cos\theta、
    L_\theta=mr^2\omega_\theta、
    L_\phi=mr^2\sin^2\theta\omega_\phi
$$

また、$L_{x,y}$ が $\omega_{\phi}$ のみを含んでいることを踏まえて $L_{\phi}（=L_{z}）$ と見比べると

$$
    L_{\phi}\cos\theta=
    -L_{x,y}\sin\theta
    \leftrightarrow
    L_{z}\cos\theta+
    L_{x,y}\sin\theta=0
$$

という関係が得られる。これはちょうど動径方向の回転成分を表しており回転する方向ではないため0となっていると考えられる。そのため、

$$
    L_x\cos\phi+L_y\sin\phi=
    L_{x,y}
    \leftrightarrow
    L_x\sin\theta\cos\phi+L_y\sin\theta\sin\phi=
    -L_{z}\cos\theta
$$














このように角運動量で力と同じ方向に関する関係式がなりたつことを踏まえて、角速度においても

$$
    \omega_x\cos\phi+\omega_y\sin\phi=\omega_{x,y}、
    -\omega_x\sin\phi+\omega_y\cos\phi=\omega_\theta、
    \omega_z=\omega_\phi
$$

となると考えると、先ほどの角運動量の関係式に代入して成立することが分かる。そこで、これらの式を角運動量の式に代入すると以下の通りになる。

$$
    L_x=
    m(r\sin\phi)^2\omega_x-
    mr^2\sin\phi\cos\phi\omega_y-
    mr^2\sin\theta\cos\theta\cos\phi\omega_z
$$
$$
    L_y=
    m(r\cos\phi)^2\omega_y-
    mr^2\sin\phi\cos\phi\omega_x-
    mr^2\sin\theta\cos\theta\sin\phi\omega_z
$$
$$
    L_z=
    m(r\sin\theta)^2\omega_z
$$















































角運動量と夫々のベクトルの内積を求める。
$$
    \bm{\omega}\cdot\bm{r}=0、
    \bm{\omega}\cdot\bm{v}=0
$$

$$
    \omega_x\sin\theta\cos\phi+
    \omega_y\sin\theta\sin\phi+
    \omega_z\cos\theta=0
$$
$$
    \begin{align*}
    &v_r
    (
        \omega_x\sin\theta\cos\phi+
        \omega_y\sin\theta\sin\phi+
        \omega_z\cos\theta
    )\\
    +&
    r\omega_\theta
    (
        \omega_x\cos\theta\cos\phi+
        \omega_y\cos\theta\sin\phi-
        \omega_z\sin\theta
    )\\
    -&
    r\omega_\phi
    (
        \omega_x\sin\theta\sin\phi-
        \omega_y\sin\theta\cos\phi
    )=0
    \end{align*}
$$

$$
    (
        \omega_x\cos\phi+
        \omega_y\sin\phi
    )\sin\theta+
    \omega_z\cos\theta=0
$$
$$
    \omega_\theta
    [
        (
            \omega_x\cos\phi+
            \omega_y\sin\phi
        )\cos\theta-
        \omega_z\sin\theta
    ]-
    \omega_\phi
    (
        \omega_x\sin\phi-
        \omega_y\cos\phi
    )\sin\theta=0
$$

$\sin\theta$ をかけて整理すると

$$
    \omega_\theta\omega_z=
    (
        \omega_y\cos\phi-
        \omega_x\sin\phi
    )\sin^2\theta\omega_\phi
$$


$$
    \omega_\theta=
    (
        \omega_y\cos\phi-
        \omega_x\sin\phi
    )\sin^2\theta、
    \omega_\phi=
    \omega_z
$$

であることから、これを先ほどの角運動量の式に代入すると

$$
    L_x=
    m(\omega_x y-\omega_y x)y
    -m\omega_z xz
$$
$$
    L_y=
    m( 
        -\omega_x y+
        \omega_y x
    )x-
    m\omega_z zy
$$
$$
    L_z=
    m(x^2+y^2)\omega_z
$$


以下のようにテンソルの形になる
$$
    \bm{L}=
    \bm{I}\bm{\omega}、
    \bm{I}=
    \begin{pmatrix}
        my^2 & -mxy & -mxz\\
        -mxy & mx^2 & -myz\\
        0 & 0 & m(x^2+y^2)\\
    \end{pmatrix}
$$

これをもう少し整理すると、

$$
    \begin{align*}
    L_z
    &=
    mr^2\omega_z(1-\cos^2\theta)\\
    &=
    mr^2
    [
        \omega_z+
        (
            \omega_x\cos\phi+
            \omega_y\sin\phi
        )\sin\theta\cos\theta
    ]\\
    &=
    mr^2\omega_z+
    m\omega_x xz+
    m\omega_y yz\\
    &=
    mr^2\omega_z+
    2mz
    (\omega_x x+\omega_y y)-
    m\omega_x xz-
    m\omega_y yz\\
    &=
    mr^2\omega_z+
    2mzr\sin\theta
    (\omega_x\cos\phi+\omega_y\sin\phi)-
    m\omega_x xz-
    m\omega_y yz\\
    &=
    mr^2\omega_z-
    2m\omega_z zr\sin\theta\cos\theta-
    m\omega_x xz-
    m\omega_y yz
    \end{align*}
$$

となるが、ここで

となるため、慣性モーメントは対称的な形になる。

$$
    \bm{L}=
    \bm{I}\bm{\omega}、
    \bm{I}=
    \begin{pmatrix}
        my^2 & -mxy & -mxz\\
        -mxy & mx^2 & -myz\\
        -mxz & -myz & mr^2\\
    \end{pmatrix}
$$


























　以上の内容を質点系に応用すると、通常の運動方程式

$$
    m_i
    \frac{\mathrm{d}^2\bm{r}_i}
    {\mathrm{d}t^2}=
    \bm{F}_{i}+
    \sum_{j=1(j\neq i)}^{N}\bm{F}_{ij}
$$

であるが、回転の場合どうなるか見るために $\bm{r}_i$ と外積をとって質点全体で総和をとると

$$
    \sum_{i=1}^N
    m_i
    \left(
    \bm{r}_i\times
    \frac{\mathrm{d}^2\bm{r}_i}
    {\mathrm{d}t^2}
    \right)=
    \sum_{i=1}^N
    (\bm{r}_i\times\bm{F}_{i})+
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\bm{r}_i\times\bm{F}_{ij})
$$

となり、ここで右辺第2項目に関して $\bm{F}_{ij}=-\bm{F}_{ji}$ を利用すれば

$$
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\bm{r}_i\times\bm{F}_{ij})=
    \frac{1}{2}
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\bm{r}_i\times\bm{F}_{ij}+
    \bm{r}_j\times\bm{F}_{ji})=
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\bm{r}_i-\bm{r}_j)
    \times\bm{F}_{ij}
$$

であるため、$\bm{r}_i-\bm{r}_j$ と $\bm{F}_{ij}$ が平行であることから0になる。そのため、最終的には以下の形になる。

$$
    \sum_{i=1}^N
    m_i
    \left(
    \bm{r}_i\times
    \frac{\mathrm{d}^2\bm{r}_i}
    {\mathrm{d}t^2}
    \right)=
    \sum_{i=1}^N
    (\bm{r}_i\times\bm{F}_{i})
$$

更に速度の形に変形すると、左辺は

$$
    \sum_{i=1}^N
    m_i
    \left(
    \bm{r}_i\times
    \frac{\mathrm{d}^2\bm{r}_i}
    {\mathrm{d}t^2}
    \right)=
    \sum_{i=1}^N
    m_i
    \left(
    \bm{r}_i\times
    \frac{\mathrm{d}\bm{v}_i}
    {\mathrm{d}t}
    \right)=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left[
    \sum_{i=1}^N
    m_i
    \left(
    \bm{r}_i\times\bm{v}_i
    \right)
    \right]

$$

となり、以下のように質点系でも回転の運動方程式が成り立つことが分かる。

$$
    \frac{\mathrm{d}\bm{L}}{\mathrm{d}t}=
    \bm{N}、
    \bm{L}=
    \sum_{i=1}^N
    m_i(\bm{r}_i\times\bm{v}_i)、
    \bm{N}=
    \sum_{i=1}^N
    (\bm{r}_i\times\bm{F}_{i})
$$

前回と含めて質点系の並進および回転について述べてきたので整理してみる。まず、並進については物体を重心 $\bm{r}$ にある質量 $m$ 質点とみなして、そこに外力 $\bm{F}$ が働くことでなされるものと考えることができた。ここで、各物理量は

$$
    \bm{r}=
    \frac{1}{m}
    \sum_{i=1}^N
    m_i\bm{r}_i、
    m=
    \sum_{i=1}^N
    m_i、
    \bm{F}=
    \sum_{i=1}^N
    \bm{F}_i
$$

という関係にある。次に回転については、これにも重心による運動が含まれていることが考えられる。そのため、回転の運動方程式がこのままだと重心の運動が重複して記述されることになる。そこで、以下のように質点系の各位置を重心からの位置に置き換える。

$$
    \bm{r}_i=\bm{r}+\bm{r}'_i、
    \bm{v}_i=\bm{v}+\bm{v}'_i
$$

このようにしたときに、まず角運動量は

$$
    \begin{align*}
    \bm{L}
    &=
    \sum_{i=1}^N
    m_i(\bm{r}_i\times\bm{v}_i)
    =
    \sum_{i=1}^N
    m_i
    \left(
        \bm{r}+\bm{r}'_i
    \right)
    \times
    (
        \bm{v}+\bm{v}'_i
    )\\
    &=
    m(\bm{r}\times\bm{v})+
    \bm{r}\times
    \left(
        \sum_{i=1}^N
        m_i\bm{v}'_i
    \right)+
    \left(
        \sum_{i=1}^N
        m_i\bm{r}'_i
    \right)\times\bm{v}+
    \sum_{i=1}^N
    m_i(\bm{r}'_i\times\bm{v}'_i)
    \end{align*}
$$

となるが、ここで重心の関係式も踏まえて

$$
    \sum_{i=1}^N
    m_i\bm{r}'_i=
    \sum_{i=1}^N
    m_i(\bm{r}-\bm{r}_i)=
    m\bm{r}-
    \sum_{i=1}^N
    m_i\bm{r}_i=\bm{0}
$$

となることから、これを時間微分することで

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \sum_{i=1}^N 
        m_i\bm{r}'_i
    \right)=
    \sum_{i=1}^N 
    m_i\bm{v}'_i=
    \bm{0}
$$

となることから、角運動量は以下の通りとなる。

$$
    \bm{L}=
    m(\bm{r}\times\bm{v})+
    \sum_{i=1}^N
    m_i(\bm{r}'_i\times\bm{v}'_i)=
    \bm{L}_G+\bm{L}'
$$

同じように、モーメントについても

$$
    \bm{N}=
    \sum_{i=1}^N
    (\bm{r}_i\times\bm{F}_{i})=
    (\bm{r}\times\bm{F})+
    \sum_{i=1}^N
    (\bm{r}'_i\times\bm{F}_{i})=
    \bm{N}_G+\bm{N}'
$$

であるから、重心自体の回転と重心の周囲の回転との二つに分けることができる。

回転ベクトルの関係を使うと

$$
    \bm{v}_\theta=
    \bm{r}\times\bm{\omega}_\theta、
    \bm{v}_\phi=
    \bm{r}\times\bm{\omega}_\phi
$$

$$
    \bm{L}=
    m(\bm{r}\times\bm{v})=
    m(\bm{r}\times\bm{v}_\theta)+
    m(\bm{r}\times\bm{v}_\phi)
$$

$$
    \bm{r}\times\bm{v}_\theta=
    \bm{r}\times(\bm{r}\times\bm{\omega}_\theta)=
    (\bm{r}\cdot\bm{\omega}_\theta)\cdot\bm{r}-
    (\bm{r}\cdot\bm{r})\cdot\bm{\omega}_\theta
$$
$$
    \bm{r}\times\bm{v}_\phi=
    \bm{r}\times(\bm{r}\times\bm{\omega}_\phi)=
    (\bm{r}\cdot\bm{\omega}_\phi)\cdot\bm{r}-
    (\bm{r}\cdot\bm{r})\cdot\bm{\omega}_\phi
$$