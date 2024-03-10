
## 特殊相対論から一般相対論へ

　ここまで観測者同士が等速直線運動をしているものとして考えてきたわけだが、実際は重力の影響を受けており等加速度運動しているものと思われる。そのため、等加速度している系同士での変換がどのようになるか考えてみる。例えば、今 $x$ 方向に一定加速度 $a$ で移動しているものとすると、
$$
    \frac{\mathrm{d}^2x}{\mathrm{d}t^2}=a、
    \frac{\mathrm{d}^2x'}{\mathrm{d}t'^2}=0、
    w'=w
$$
となるため、以下の関係が成り立つものと考えられる。
$$
    x'=x-\frac{1}{2}at^2=x-\frac{a}{2c^2}w^2、
    w'=w
$$
これをLorentz変換のところでも見せた時空図で描写すると以下のようになる。
<p align="center">
    <img width="40%" src="images/const.png">
</p>
このことから、加速する座標への変換というのは曲がったものになることが予想される。

　この曲がった座標に変換する方法というのは、Riemann幾何学があることが知られている。だが、この分野はかなり難解であるものであるため、まずはその橋渡しとしてGalielei変換、Lorentz変換を数学的にどのように取り扱うことができるか見てみることにする。まず、Galiei変換は
$$
    w'=w、x'=-\beta w+x、y'=y、z'=z、
    \left(\beta=\frac{V}{c}\right)
$$
となるわけだが、行列でまとめて以下のように記載することもできる。
$$
\begin{pmatrix}
    w' \\
    x' \\
    y' \\
    z'
\end{pmatrix}
=
\begin{pmatrix}
    1 & 0 & 0 & 0 \\
    -\beta & 1 & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
    w \\
    x \\
    y \\
    z
\end{pmatrix}
$$
あるいは、これをさらに扱い易くするよう添え字に行列の番号を振って
$$
\begin{pmatrix}
    x'^0 \\
    x'^1 \\
    x'^2 \\
    x'^3
\end{pmatrix}
=
\begin{pmatrix}
    \alpha_{ 0}^0 & \alpha_{ 1}^0 & 
    \alpha_{ 2}^0 & \alpha_{ 3}^0 \\
    \alpha_{ 0}^1 & \alpha_{ 1}^1 & 
    \alpha_{ 2}^1 & \alpha_{ 3}^1 \\
    \alpha_{ 0}^2 & \alpha_{ 1}^2 & 
    \alpha_{ 2}^2 & \alpha_{ 3}^2 \\
    \alpha_{ 0}^3 & \alpha_{ 1}^3 & 
    \alpha_{ 2}^3 & \alpha_{ 3}^3 
\end{pmatrix}
\begin{pmatrix}
    x^0 \\
    x^1 \\
    x^2 \\
    x^3
\end{pmatrix}
$$
とおくと、各成分ごと（**ベクトルではない**）に簡略化して書ける。
$$
    x'^\mu=
    \sum_{\nu=0}^{3}\alpha_{ \nu}^\mu x^\nu　
    (\mu=0,1,2,3)
$$
あるいは、今ここで $\nu$ に対して総和をとっているが、行列においては下付き添え字（行）と上付き添え字（列）の掛け算は足し合わせることになるので、以下のように総和記号を省いた表記（**Einsteinの縮約記法**）がよく用いられている。
$$
    x'^\mu=\alpha_{ \nu}^\mu x^\nu　
    (\mu=0,1,2,3)
$$
一方で、Lorentz変換においても
$$
    w'=\gamma(w-\beta x)、
    x'=\gamma(-\beta w+x)、
    y'=y、
    z'=z、
    \left(
        \gamma=\frac{1}{\sqrt{1-\beta^2}}
    \right)
$$
となるため、同じように行列にしてみると
$$
\begin{pmatrix}
    w' \\
    x' \\
    y' \\
    z'
\end{pmatrix}
=
\begin{pmatrix}
    \gamma & -\gamma\beta & 0 & 0 \\
    -\gamma\beta & \gamma & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
    w \\
    x \\
    y \\
    z
\end{pmatrix}
$$
であるため、先ほどと同様に $\alpha$ を用いた表記をすることができる。ところが、つい先ほど扱った加速度の系の場合だと
$$
    w'=w、x'=-\frac{a}{2c^2}w^2+x、
    y'=y,z'=z
$$
というように、$w^2$ が関わってきてしまうため、一概に同じような関係式で表せないことが分かる。そこで、一般的に以下のような関数で表されるものとする。
$$
    w'=w'(w,x,y,z)、
    x'=x'(w,x,y,z)、
    y'=y'(w,x,y,z)、
    z'=z'(w,x,y,z)
$$
そして、これらの微小変化をとると
$$
    \mathrm{d}w'=
    \left(
        \frac{\partial w'}{\partial w}
    \right)
    \mathrm{d}w+
    \left(
        \frac{\partial w'}{\partial x}
    \right)
    \mathrm{d}x+
    \left(
        \frac{\partial w'}{\partial y}
    \right)
    \mathrm{d}y+
    \left(
        \frac{\partial w'}{\partial z}
    \right)
    \mathrm{d}z
$$
$$
    \mathrm{d}x'=
    \left(
        \frac{\partial x'}{\partial w}
    \right)
    \mathrm{d}w+
    \left(
        \frac{\partial x'}{\partial x}
    \right)
    \mathrm{d}x+
    \left(
        \frac{\partial x'}{\partial y}
    \right)
    \mathrm{d}y+
    \left(
        \frac{\partial x'}{\partial z}
    \right)
    \mathrm{d}z
$$
$$
    \mathrm{d}y'=
    \left(
        \frac{\partial y'}{\partial w}
    \right)
    \mathrm{d}w+
    \left(
        \frac{\partial y'}{\partial x}
    \right)
    \mathrm{d}x+
    \left(
        \frac{\partial y'}{\partial y}
    \right)
    \mathrm{d}y+
    \left(
        \frac{\partial y'}{\partial z}
    \right)
    \mathrm{d}z
$$
$$
    \mathrm{d}z'=
    \left(
        \frac{\partial z'}{\partial w}
    \right)
    \mathrm{d}w+
    \left(
        \frac{\partial z'}{\partial x}
    \right)
    \mathrm{d}x+
    \left(
        \frac{\partial z'}{\partial y}
    \right)
    \mathrm{d}y+
    \left(
        \frac{\partial z'}{\partial z}
    \right)
    \mathrm{d}z
$$
であるのだが、これ書き直すと以下のような形で書けることが分かる。
$$
\begin{pmatrix}
    \mathrm{d}w' \\
    \mathrm{d}x' \\
    \mathrm{d}y' \\
    \mathrm{d}z'
\end{pmatrix}
=
\begin{pmatrix}
    \frac{\partial w'}{\partial w} & 
    \frac{\partial w'}{\partial x} & 
    \frac{\partial w'}{\partial y} & 
    \frac{\partial w'}{\partial z} \\
    \frac{\partial x'}{\partial w} & 
    \frac{\partial x'}{\partial x} & 
    \frac{\partial x'}{\partial y} & 
    \frac{\partial x'}{\partial z} \\
    \frac{\partial y'}{\partial w} & 
    \frac{\partial y'}{\partial x} & 
    \frac{\partial y'}{\partial y} & 
    \frac{\partial y'}{\partial z} \\
    \frac{\partial z'}{\partial w} & 
    \frac{\partial z'}{\partial x} & 
    \frac{\partial z'}{\partial y} & 
    \frac{\partial z'}{\partial z} \\
\end{pmatrix}
\begin{pmatrix}
    \mathrm{d}w \\
    \mathrm{d}x \\
    \mathrm{d}y \\
    \mathrm{d}z
\end{pmatrix}
$$
これは先ほどの各成分ごとの表記と同様な形で
$$
    \mathrm{d}x'^\mu=
    \left(
        \frac{\partial x'^\mu}{\partial x^\nu}
    \right)
    \mathrm{d}x^\nu　
    (\mu=0,1,2,3)
$$
と記述できるため、先ほどの一定加速度での行列は次の通りになる。
$$
\begin{pmatrix}
    \mathrm{d}x'^0 \\
    \mathrm{d}x'^1 \\
    \mathrm{d}x'^2 \\
    \mathrm{d}x'^3
\end{pmatrix}
=
\begin{pmatrix}
    1 & 0 & 0 & 0 \\
    -ax^0/c^2 & 1 & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
    \mathrm{d}x^0 \\
    \mathrm{d}x^1 \\
    \mathrm{d}x^2 \\
    \mathrm{d}x^3
\end{pmatrix}
$$
さらに、ここでの偏微分の部分を分母の添え字を用いて簡潔に表現すると以下のようになる。
$$
    e_{\nu}^\mu=
    \partial_\nu x'^\mu=
    \left(
        \frac{\partial x'^\mu}{\partial x^\nu}
    \right)
    \rightarrow
    \mathrm{d}x'^\mu=
    e_{\nu}^\mu\mathrm{d}x^\nu
$$
あるいは、行列の見方を変えると
$$
\begin{pmatrix}
    \mathrm{d}w' \\
    \mathrm{d}x' \\
    \mathrm{d}y' \\
    \mathrm{d}z'
\end{pmatrix}
=
\mathrm{d}w
\begin{pmatrix}
    \frac{\partial w'}{\partial w} \\
    \frac{\partial x'}{\partial w} \\
    \frac{\partial y'}{\partial w} \\
    \frac{\partial z'}{\partial w} 
\end{pmatrix}+
\mathrm{d}x
\begin{pmatrix}
    \frac{\partial w'}{\partial x} \\
    \frac{\partial x'}{\partial x} \\
    \frac{\partial y'}{\partial x} \\
    \frac{\partial z'}{\partial x} 
\end{pmatrix}+
\mathrm{d}y
\begin{pmatrix}
    \frac{\partial w'}{\partial y} \\
    \frac{\partial x'}{\partial y} \\
    \frac{\partial y'}{\partial y} \\
    \frac{\partial z'}{\partial y} 
\end{pmatrix}+
\mathrm{d}z
\begin{pmatrix}
    \frac{\partial w'}{\partial z} \\
    \frac{\partial x'}{\partial z} \\
    \frac{\partial y'}{\partial z} \\
    \frac{\partial z'}{\partial z} 
\end{pmatrix}
$$
というように、基底ベクトルの和の形にもなるため、次のように書くこともできる。
$$
    \mathrm{d}\bm{x}'=
    \mathrm{d}x^{\nu}\bm{e}_{\nu}　
    \left(
        \bm{e}_{\nu}=
        \frac{\partial \bm{x}'}
        {\partial x^\nu}
    \right)

$$
そして、この大きさを求めるために内積をとると
$$
    \mathrm{d}s^2=
    \mathrm{d}\bm{x}'\cdot\mathrm{d}\bm{x}'=
    (\bm{e}_\mu\cdot\bm{e}_\nu)\ 
    \mathrm{d}x^\mu\mathrm{d}x^\nu=
    g_{\mu\nu}
    \mathrm{d}x^\mu\mathrm{d}x^\nu　
    (g_{\mu\nu}=\bm{e}_\mu\cdot\bm{e}_\nu)
$$
となるが、ここで現れる $g_{\mu\nu}$ が**計量**と呼ばれており、Riemann幾何学では重要な役目を果たすものとなっている。実際、この大きさを次の通りにすると互いに不変な形で記載することができる。
$$
    \mathrm{d}s^2=
    g'_{\mu\nu}
    \mathrm{d}x'^\mu\mathrm{d}x'^\nu=
    g_{\lambda\tau}
    \mathrm{d}x^\lambda\mathrm{d}x^\tau、
    （g'_{\mu\nu}=
    \bm{e}'_\mu\cdot\bm{e}'_\nu、
    g_{\lambda\tau}=
    \bm{e}_\lambda\cdot\bm{e}_\tau
    ）
$$
この関係が成り立つかどうかは、まず
$$
    \mathrm{d}x'^\mu\mathrm{d}x'^\nu=
    \partial_\lambda x'^{\mu}
    \mathrm{d}x^\lambda
    \partial_\tau x'^{\nu}
    \mathrm{d}x^\tau=
    \partial_\lambda x'^{\mu}
    \partial_\tau x'^{\nu}
    \mathrm{d}x^\lambda\mathrm{d}x^\tau
$$
と展開することができ、これに計量 $g'_{\mu\nu}$ をかけると
$$
    g'_{\mu\nu}
    \mathrm{d}x'^\mu\mathrm{d}x'^\nu=
    g'_{\mu\nu}
    \partial_\lambda x'^{\mu}
    \partial_\tau x'^{\nu}
    \mathrm{d}x^\lambda\mathrm{d}x^\tau
$$
であり、同じように $g_{\lambda\tau}\mathrm{d}x^\lambda\mathrm{d}x^\tau$ も展開してみると
$$
    g_{\lambda\tau}
    \mathrm{d}x^\lambda\mathrm{d}x^\tau=
    g_{\lambda\tau}
    \partial'_\mu x^{\lambda}
    \partial'_\nu x^{\tau}
    \mathrm{d}x'^\mu\mathrm{d}x'^\nu
$$
というようになるため、以下の関係式が成り立ち互いに代入することで元の $\mathrm{d}s^2$ の関係式を満たしていることが確認できる。
$$
    g'_{\mu\nu}=
    g_{\lambda\tau}
    \partial'_\mu x^{\lambda}
    \partial'_\nu x^{\tau}、
    g_{\lambda\tau}=
    g'_{\mu\nu}
    \partial_\lambda x'^{\mu}
    \partial_\tau x'^{\nu}
$$
ここまでで、$\mathrm{d}s^2$ の式というは今までのベクトルの積の形をしていないように見えるが
$$
    \mathrm{d}x_\mu=
    g_{\mu\nu}\mathrm{d}x^{\nu}、
    \mathrm{d}x_\nu=
    g_{\mu\nu}\mathrm{d}x^{\mu}
$$
というように定義することで、次のように積の形で表記することもできる。
$$
    \mathrm{d}s^2=
    \mathrm{d}x'^\mu\mathrm{d}x'_\mu=
    \mathrm{d}x'_\nu\mathrm{d}x'^\nu=
    \mathrm{d}x^\lambda\mathrm{d}x_\lambda=
    \mathrm{d}x_\tau\mathrm{d}x^\tau
$$
また、$g_{\mu\nu}$ の逆行列で $g^{\mu\nu}$ というように書くと
$$
    \mathrm{d}x^{\nu}=
    g^{\nu\lambda}\mathrm{d}x_{\lambda} 、
    \mathrm{d}x^{\mu}=
    g^{\mu\tau}\mathrm{d}x_{\tau}
$$
であるから、以下のように逆行列の性質を利用して等式が成り立つことが分かる。
$$
    \mathrm{d}x_\mu=
    g_{\mu\nu}\mathrm{d}x^{\nu}=
    g_{\mu\nu}g^{\nu\lambda}
    \mathrm{d}x_{\lambda}=
    \delta_\mu^\lambda\mathrm{d}x_{\lambda}=
    \mathrm{d}x_{\mu}
$$
$$
    \mathrm{d}x_\nu=
    g_{\mu\nu}\mathrm{d}x^{\mu}=
    g_{\mu\nu}g^{\mu\tau}
    \mathrm{d}x_{\tau}=
    \delta_\nu^\tau\mathrm{d}x_{\tau}=
    \mathrm{d}x_{\nu}
$$

実は、この関係が成り立つことは相対論的力学でも出てきており、このときは
$$
    \mathrm{d}t'
    \sqrt{1-\frac{\bm{v'}^2}{c^2}}=
    \mathrm{d}t
    \sqrt{1-\frac{\bm{v}^2}{c^2}}
$$
であったが、変位の形に整理して二乗にすると不変な形をしていることが分かる（Galilei変換、等加速度系の変換でも別の形で不変な形になる）。
$$
    ds^2=
    \mathrm{d}w'^2-
    \mathrm{d}x'^2-
    \mathrm{d}y'^2-
    \mathrm{d}z'^2=
    \mathrm{d}w^2-
    \mathrm{d}x^2-
    \mathrm{d}y^2-
    \mathrm{d}z^2
$$
この時の計量の形は以下のようになっており、**Minkofsky計量**と呼ばれている。
$$
    g_{\mu\nu}=
    \eta_{\mu\nu}=
    \begin{pmatrix}
    1 & 0 & 0 & 0 \\
    0 & -1 & 0 & 0 \\
    0 & 0 & -1 & 0 \\
    0 & 0 & 0 & -1
\end{pmatrix}
$$


このように、特殊相対性理論にもRieman幾何学との間に計量を通じて関係しているため、以降ではこれを用いて一般相対性理論について述べていくことにする。