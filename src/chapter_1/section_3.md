
## 力の種類について

　ここからは、実際の運動からどのような力があるのかを見ていくことにしよう。

1. 水平な地面に置かれた物体

<p align="center">
    <img width="50%" src="images/translational_motion.png">
</p>

何もしていない状態だと静止し続ける。そこに下図のように力をかけ続けると動き始め、この様子を運動方程式を用いてみる。
$$
    m\bm{a}=\bm{F}
    \leftrightarrow
    \begin{cases}
        ma_x=F_x=F \\
        ma_y=F_y=0
    \end{cases}
$$
このことから、$x$方向に対しては $F/m$ の加速度で進むが、$y$ 方向へは一定の速度（今は静止したまま）で動くことが分かる。だが、すぐ動き出すわけではなく最初はある程度静止し続けてから動き出す。これは、摩擦力 $F_W$ が働いているものと考える。
$$
    m\bm{a}=\bm{F}
    \leftrightarrow
    \begin{cases}
        ma_x=F_x=F-F_W=0 \\
        ma_y=F_y=0
    \end{cases}
$$

1. 上記と同様な状況で角度 $\theta$ だけ傾けて力をかけた場合

<p align="center">
    <img width="50%" src="images/translational_motion_theta.png">
</p>

先ほどと同様な考え方で
$$
    m\bm{a}=\bm{F}
    \leftrightarrow
    \begin{cases}
        ma_x=F_x=F\cos\theta-F_W=0 \\
        ma_y=F_y=F\sin\theta
    \end{cases}
$$
となるわけだが、もしこの力だけ存在するならば$x,y$方向へ加速していくものと考えられる。しかし、実際はそうはならず静止したままである。そのため、下向きにも力が働くことが予想される。ただ、この場合だと地面が邪魔でどのような力が働いているかわからないため、次に持ち上げた状態から離した場合にどのような力が働くのかを見てみる。

1. 落下運動と2と同様の運動

<p align="center">
    <img width="40%" src="images/falling_motion.png">
</p>

　物体を持ち上げて離すと落下するわけだが、このとき重力 $F_G$ （地球と物体の間に働く万有引力の一種）が働いている。そのため、このときの運動方程式は以下の形になることが分かる。
$$
    m\bm{a}=\bm{F}
    \leftrightarrow
    \begin{cases}
        ma_x=F_x=0 \\
        ma_y=F_y=-F_G
    \end{cases}
$$

この重力が働くということを踏まえて、改めて先ほどの状況を考えてみる。この場合だと、重力と上にひく力が釣り合っていると思えるが、すると何も力が働いていないときに静止していることの説明がつかない。そのため、重力により下へ引き付けることで地面へ力がかかり地面から反発力（反作用）が働くものと考えられる。

$$
m\bm{a}=\bm{F}
\leftrightarrow
\begin{cases}
    ma_x=F_x=0 \\
    ma_y=F_y=N-F_G=0
\end{cases}
$$

そのため、先ほど角度をつけた場合にも以下のようになる。


$$
    m\bm{a}=\bm{F}
    \leftrightarrow
    \begin{cases}
        ma_x=F_x=F\cos\theta-F_W=0 \\
        ma_y=F_y=F\sin\theta+N-F_G=0
    \end{cases}
$$

<p align="center">
    <img width="50%" src="images/translational_motion_theta2.png">
</p>

　以上のように、運動を観測することでどのような力が働いているのか予測することが可能ではあるが、実際にどのような値をとるかは調べる必要が出てくる。例えば、摩擦力 $F_W$ の場合は先ほどの $x$ 方向の運動方程式において

$$
    F\cos\theta-F_W=0
    \rightarrow
    F_W=F\cos\theta
$$

とあるように外部の力と同じであるが、いつまでもそうではなく限界値（最大静止摩擦力）が存在する。最大静止摩擦力は静止摩擦係数 $\mu$（床の材質などで決まる）により $\mu N$ となる。これを超えて動き出すと動摩擦力が働き、この大きさは動摩擦係数 $\mu'$ により $\mu' N$ となる。また、重力 $F_G$ の方は万有引力の一種であり、
重力加速度 $g$ により $mg$ というように書けるが、この値というのは地球の質量、物体と地球との間の距離、万有引力定数をそれぞれ $M,r,G$ とすると

$$
    F_G=G\frac{mM}{r^2}=mg、
    g=\frac{GM}{r^2}
$$

という関係にある。ここで $g$ の値は

$$
    G=
    6.6430\times
    10^{-11}\ 
    \mathrm{m^3\ kg^{-1}\ s^{-2}}
$$
$$
    r=6.378
    \times 10^{6}\ \mathrm{m}、
    M=5.972\times
    10^{24}\ \mathrm{kg}
$$

から計算すると $9.75248\ \mathrm{m/s^2}$ というように、よく知られた値になることも分かる。