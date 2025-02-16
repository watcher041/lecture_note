
## 回転運動について

　ここからは回転運動をどのように扱うかを見ていくことにしよう。まず、回転というのはある一点を軸にその周囲を運動することを言う。その様子を記述する際に、ちょうど二体問題で扱った極座標が便利なので、これを用いることにする。すなわち、通常の運動方程式は直交座標系を用いて

$$
    m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=
    F_x、
     m\frac{\mathrm{d}^2y}{\mathrm{d}t^2}=
    F_y
$$

であるが、これを極座標におきかえる際に

$$
    x=r\cos\theta、
    y=r\sin\theta
$$

であることを踏まえて

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

と計算されることから、以下の方程式が得られる。

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

ここで右辺の力に関しては、それぞれ以下の図にある通り極座標の各成分の力になっていることが分かる（$F_r$ に関しては赤線と青線の長さを足したもの、$F_\theta$ については 青線から赤線を引いた長さになっている）。

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

つまり、先ほどの方程式はそれぞれ極座標の各成分の運動方程式になっていることが分かる。

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

ここで各成分を見てみると、動径方向については

$$
    m\frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    F_r+f、
    f=
    mr
    \left(
        \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
$$

といように通常の運動方程式にあたかも力 $f$ （遠心力）が遠ざかる方向に加わった形になっている。次に、角度方向については二体問題と同じように $r$ を書けて整理すると

$$
    \frac{\mathrm{d}L}{\mathrm{d}t}=
    rF_\theta、
    L=
    mr^2\frac{\mathrm{d}\theta}{\mathrm{d}t}
$$

というように $L$ を用いて書ける。ここで回転する条件を考えたとき、角度方向に動いていれば回転することから角度の時間微分（**角速度**）が0でないことが予想される。すなわち、角速度を $\omega$ としたときに以下の条件が成り立つものと考えられる。

$$
    \omega= 
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \neq 0
$$

そこで、先ほどの式を $\omega$ を用いて表記し直すと

$$
    m\frac{\mathrm{d}^2r}{\mathrm{d}t^2}=
    F_r+f、
    f=
    mr\omega^2
$$
$$
    \frac{\mathrm{d}L}{\mathrm{d}t}=
    rF_\theta、
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

というように回転の運動方程式として記述される。ここで、$N$ については直交座標系で見た時に

$$
    N=rF_\theta=
    r\cos\theta F_y - r\sin\theta F_x =
    xF_y - yF_x 
$$

となるが、これは外積と呼ばれる関係になっているものと思われる。例えば、以下のようにベクトル $\bm{a}=(a_x,a_y,0)、\bm{b}=(b_x,b_y,0)$ がある場合、外積 $\bm{c}$ は以下の形で表される。

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

そのため、回転方向については $z$ 成分に関する方程式になっていると考えられる。そこで、運動方程式

$$
    m\frac{\mathrm{d}\bm{v}}{\mathrm{d}t}=\bm{F}
$$

に外積をとり $z$ 成分を見てみることにする。まず、両辺に $\bm{r}$ と外積をとると

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

であるから以下の通りになる。

$$
    m
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\bm{r}\times\bm{v})=
    \bm{N}
$$

ここで、左辺を極座標で整理すると

$$
    m(\bm{r}\times\bm{v})=
    \left(
        0,0,
        mx
        \frac{\mathrm{d}y}{\mathrm{d}t}-
        my
        \frac{\mathrm{d}x}{\mathrm{d}t}
    \right)=
    (0,0,I\omega)
$$

というように $z$ 成分が角運動量 $L$ と同じ形になるため、最終的に以下の通りになる。

$$
    \frac{\mathrm{d}\bm{L}}
    {\mathrm{d}t}=
    \bm{N}、
    \bm{L}=
    m(\bm{r}\times\bm{v})=
    I\bm{\omega}、
    \bm{N}=\bm{r}\times\bm{F}
$$

　以上の内容を質点系に応用すると、通常の運動方程式

$$
    m_i
    \frac{\mathrm{d}^2\bm{r}_i}
    {\mathrm{d}t^2}=
    \bm{F}_{i}+
    \sum_{j=1(j\neq i)}^{N}\bm{F}_{ij}
$$

の両辺に外積をとることで

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
    \right]=
    \frac{\mathrm{d}}{\mathrm{d}t}
    (I\bm{\omega})、
    I=\sum_{i=1}^N
    m_ir_i^2
$$

となり、回転軸から質点の位置が不変であれば
以下のような形になる。
$$
    I
    \frac{\mathrm{d}\bm{\omega}}
    {\mathrm{d}t}=
    \bm{N}、
    \bm{N}=
    \sum_{i=1}^N
    (\bm{r}_i\times\bm{F}_{i})
$$