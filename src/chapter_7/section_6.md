
## 特殊相対論から一般相対論へ

　ここからは、等加速度運動している系同士での変換がどのようになるか見ていこう。例えば、今 $x$ 方向に一定加速度 $a$ で移動しているものとすると、

$$

    \frac{\mathrm{d}^2x}{\mathrm{d}t^2}=a、
    \frac{\mathrm{d}^2x'}{\mathrm{d}t'^2}=0、
    t'=t
$$

となるため、以下の関係が成り立つものと考えられる。

$$
    x'=x-\frac{1}{2}at^2=x-\frac{a}{2c^2}w^2、
    w'=w、
    (w=ct)
$$

これをLorentz変換のところでも見せた時空図で描写すると以下のようになる。
<p align="center">
    <img width="40%" src="images/const.png">
</p>
このことから、加速する座標への変換というのは曲がったものになることが予想される。この曲がった座標へ変換する理論としてRiemann幾何学というものがある。だが、この分野はかなり難解であるため、まずRiemann幾何学の記法について述べていくことにする。

　一般的に、ある地点の位置を指定するときはベクトル $\bm{s}$ を用いて表記される。その中身は座標系を指定することで表すことができ、例えば $N$ 次元の座標系 $(x_1,x_2,\cdots,x_N)$ の場合だと $\bm{s}=\bm{s}(x_1,x_2,\cdots,x_N)$ となる。一方で、別の $N$ 次元の座標系 $(x'_1,x'_2,\cdots,x'_N)$ の場合だと $\bm{s}=\bm{s}(x'_1,x'_2,\cdots,x'_N)$ となるため、先ほどの座標系から別の座標系への変換を考えると

$$
    \bm{s}=
    \bm{s}(x_1,x_2,\cdots,x_N)=
    \bm{s}(x'_1,x'_2,\cdots,x'_N)
$$

というようになる。これらの関係は微小変化をとることで確認できる。すなわち

$$
    \mathrm{d}\bm{s}=
    \sum_{i=1}^N
    \left(
        \frac{\partial\bm{s}}{\partial x_i}
    \right)
    \mathrm{d}x_i=
    \sum_{j=1}^N
    \left(
        \frac{\partial\bm{s}}{\partial x'_j}
    \right)
    \mathrm{d}x'_j
$$

というようにしたときに、偏微分の部分について

$$
    x_i=x_i(x'_1,x'_2,\cdots,x'_N)、
    x'_j=x'_j(x_1,x_2,\cdots,x_N)
$$

であることから、以下のような関係になっていることが分かる。

$$
    \frac{\partial\bm{s}}{\partial x_i}=
    \sum_{k=1}^N
    \left(
        \frac{\partial\bm{s}}{\partial x'_k}
    \right)
    \frac{\partial x'_k}{\partial x_i}、
    \frac{\partial\bm{s}}{\partial x'_j}=
    \sum_{l=1}^N
    \left(
        \frac{\partial\bm{s}}{\partial x_l}
    \right)
    \frac{\partial x_l}{\partial x'_j}
$$

ここで、偏微分について

$$
    \bm{u}_i\equiv
    \frac{\partial\bm{s}}{\partial x_i}、
    \bm{u}'_j\equiv
    \frac{\partial\bm{s}}{\partial x'_j}
$$

というように置くと、先ほどの式は

$$
    \bm{u}_i=
    \sum_{k=1}^N
    \frac{\partial x'_k}{\partial x_i}
    \bm{u}'_k、
    \bm{u}'_j=
    \sum_{l=1}^N
    \frac{\partial x_l}{\partial x'_j}
    \bm{u}_l
$$

というようになるが、ここで仮に $\bm{s}$ が基本ベクトルにより

$$
    \bm{s}=
    \sum_{i=1}^N x_i\bm{e}_i=
    \sum_{j=1}^N x'_j\bm{e}'_j
$$

というように書けるものとすると、

$$
    \bm{u}_i=\bm{e}_i、
    \bm{u}'_j=\bm{e}'_j
$$

というように基本ベクトルと一致し、先ほどの関係式は基本ベクトルの変換式になっていることが分かる。

$$
    \bm{e}_i=
    \sum_{k=1}^N
    \frac{\partial x'_k}{\partial x_i}
    \bm{e}'_k、
    \bm{e}'_j=
    \sum_{l=1}^N
    \frac{\partial x_l}{\partial x'_j}
    \bm{e}_l
$$

このことから、先ほどの式は各地点での基底ベクトルの変換式になっていると考えられる。また、基底ベクトルを用いると最初の式も

$$
    \mathrm{d}\bm{s}=
    \sum_{i=1}^N
    \mathrm{d}x_i\bm{u}_i=
    \sum_{j=1}^N
    \mathrm{d}x'_j\bm{u}'_i
$$

というようになるが、ここで基底ベクトル同士の関係（座標系がどのような形になっているか）は内積をとった

$$
    \mathrm{d}\bm{s}\cdot\mathrm{d}\bm{s}=
    \sum_{i=1}^N
    \sum_{k=1}^N
    \left(
        \bm{u}_i\cdot\bm{u}_k
    \right)
    \mathrm{d}x_i\mathrm{d}x_k=
    \sum_{j=1}^N
    \sum_{l=1}^N
    \left(
        \bm{u}'_j\cdot\bm{u}'_l
    \right)
    \mathrm{d}x'_j\mathrm{d}x'_l
$$

の形が求まることで分かるので、ここでの基底ベクトル同士の内積を

$$
    g_ik=\bm{u}_i\cdot\bm{u}_k
$$

というように置くと、この形が求まることで座標系の形および座標変換前後の変位も求められることになる。この $g_ik$ がRiemann計量と呼ばれ、Riemann幾何学において重要な量となっている。