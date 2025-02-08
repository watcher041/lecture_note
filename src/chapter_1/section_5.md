
## 回転運動について

　前回までに単に質点としておけない運動として回転運動を挙げたので、まず簡単に質点が回転している場合の運動がどのようになるかを見てみよう。まず、回転というのはある一点を軸にその周囲を運動することを言う。それを見るときにちょうど二体問題で扱った極座標が便利なので、これを見ていくことにする。まず、通常の運動方程式は直交座標系を用いて

$$
    m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=
    F_x、
     m\frac{\mathrm{d}^2y}{\mathrm{d}t^2}=
    F_y
$$

となり、これを極座標におきかえると

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

というように角運動量 $L$ を用いて書ける。ここで回転する条件を考えたとき、角度方向に動いていれば回転することから角度の時間微分（**角速度**）が0でないことが思い浮かぶ。すなわち、角速度を $\omega$ としたときに以下の条件が成り立つものと考えられる。

$$
    \omega= 
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \neq 0
$$

さらに、$\omega$ を用いると先ほどの遠心力と角運動量は

$$
    f=mr\omega^2、L=mr^2\omega
$$

となるわけだが、このうち $L$ は従来の運動量が質量（慣性質量）と速度の掛け算であったことを踏まえ

$$
    L=I\omega、
    I=mr^2
$$

というように $I$（**慣性モーメント**）を用いると、あたかも回転の運動方程式として記述することができる。そうすると、$rF_\theta$ は回転を変化させる量として $N$（**モーメント**）としてみなすことができるため、

$$
    \frac{\mathrm{d}L}{\mathrm{d}t}=N、
    L=I\omega=mr^2\omega、N=rF_\theta
$$

というように書ける。もう少し具体的には、直交座標系で見た時に

$$
    rF_\theta=
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

ちなみに外積の特徴としては、以下の通りである。

1. 外積の元となったベクトル（$\bm{a},\bm{b}$）は外積（$\bm{c}$）と直交する。

1. 外積の大きさは外積の元となったベクトル（$\bm{a},\bm{b}$）のなす角 $\theta$ により $ab\sin\theta$ と表される。

上記において、$\bm{a}=\bm{r},\bm{b}=\bm{F}$ としても分かるように外積と同じ形をしていることから、試しに

$$
    \bm{N}=\bm{r}\times\bm{F}
$$

とおくと、一般に運動方程式が

$$
    m\frac{\mathrm{d}\bm{v}}{\mathrm{d}t}=\bm{F}
$$

であることから両辺に外積をとることで

$$
    m
    \left(
    \bm{r}\times
    \frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
    \right)
    =
    \bm{r}\times\bm{F}
$$

であり、左辺を変形すると

$$
    \left(
    \bm{r}\times
    \frac{\mathrm{d}\bm{v}}{\mathrm{d}t}
    \right)=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
    \bm{r}\times\bm{v}
    \right)-
    (\bm{v}\times\bm{v})=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
    \bm{r}\times\bm{v}
    \right)
$$

であるから以下の通りになる。

$$
    m
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
    \bm{r}\times\bm{v}
    \right)=
    \bm{r}\times\bm{F}
$$