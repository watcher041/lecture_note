
## 共変ベクトルと反変ベクトル

　座標変換するとき、


　ある二つの座標系において座標変換が行われたときに、ベクトルは以下の通り変換の方法によって二通りに分けられる。

$$
    \begin{cases}
        ・\bm{a}=(a_1,a_2,\cdots,a_N)&：共変ベクトル（下付き添え字で区別）\\
        ・\bm{b}=(b^1,b^2,\cdots,b^{N})&：反変ベクトル（上付き添え字で区別）
    \end{cases}
$$

これらのベクトルは、座標系 $(x^1,x^2,\cdots,x^N)$ から座標系 $(x'^1,x'^2,\cdots,x'^{N'})$ に変換した場合、

$$
    a'_i=
    \sum_{j=1}^N
    \alpha_{i}^{j}
    a_j、
    \alpha_{i}^{j}=
    \left(
        \frac{\partial x'^j}{\partial x^i}
    \right)、
    b'^i=
    \sum_{j=1}^N
    \beta_{j}^{i}
    b^j、
    \beta_{i}^{j}=
    \left(
        \frac{\partial x^i}{\partial x'^j}
    \right)
$$

というような変換式に従う。同じように、微小ベクトル $\mathrm{d}\bm{s}$ についても以下のようになる。

$$
    \mathrm{d}\bm{s}=
    \sum_{i=1}^{N}
    \mathrm{d}x^{i}\bm{u}_i=
    \sum_{j=1}^{N'}
    \mathrm{d}x'^{j}\bm{u}'_j、
    
$$
$$
    (\mathrm{d}\bm{s})^2=
    \sum_{i=1}^{N}
    \sum_{j=1}^{N}
    (\bm{u}_i\cdot\bm{u}_j)
    \mathrm{d}x^{i}\mathrm{d}x^{j}=
    \sum_{i=1}^{N'}
    \sum_{j=1}^{N'}
    (\bm{u}'_i\cdot\bm{u}'_j)
    \mathrm{d}x'^{i}\mathrm{d}x'^{j}
$$






例として、共変ベクトルは基底ベクトル $\bm{u}$ と同じ変換をするものであり、ベクトル成分の微小変位 $\mathrm{d}x$ はそれとは分子と分母が逆の変換を行われるため反変ベクトルとなる。そのため座標系も多くの場合、上付きで $(x^1,x^2,\cdots,x^N)$ というように表記される。しかし、ベクトル成分 $x$ 自体は必ずしも反変ベクトルとならないこともある。例として、座標を $\alpha$ だけ回転した場合を考える。

<p align="center">
    <img width="40%" src="images/rotate_before.png">　　　
    <img width="22%" src="images/rotate_after.png">
</p>

このとき、各座標系での関係式は

$$
    x=r\cos\theta、
    y=r\sin\theta
$$

を利用することで以下のように求められる。

$$
    x'=r\cos(\theta+\alpha)=
    r\cos\theta\cos\alpha-r\sin\theta\sin\alpha=
    x\cos\alpha-y\sin\alpha
$$
$$
    y'=r\sin(\theta+\alpha)=
    r\sin\theta\cos\alpha+r\cos\theta\sin\alpha=
    y\cos\alpha+x\sin\alpha
$$
$$
    x=x'\cos\alpha+y'\sin\alpha、
    y=y'\cos\alpha-x'\sin\alpha
$$

このことから、偏微分については

$$
    \frac{\partial x'}{\partial x}=
    \cos\alpha、
    \frac{\partial x'}{\partial y}=
    -\sin\alpha、
    \frac{\partial y'}{\partial x}=
    \sin\alpha、
    \frac{\partial y'}{\partial y}=
    \cos\alpha
$$
$$
    \frac{\partial x}{\partial x'}=
    \cos\alpha、
    \frac{\partial x}{\partial y'}=
    \sin\alpha、
    \frac{\partial y}{\partial x'}=
    -\sin\alpha、
    \frac{\partial y}{\partial y'}=
    \cos\alpha
$$

となることから、成分ベクトルと基底ベクトルの変換式は以下の通りとなる。

$$
    \mathrm{d}x'=
    \cos\alpha\ \mathrm{d}x-\sin\alpha\ \mathrm{d}y、
    \mathrm{d}y'=
    \sin\alpha\ \mathrm{d}x+\cos\alpha\ \mathrm{d}y
$$
$$
    \bm{u}_x'=
    \cos\alpha\ \bm{u}_x-\sin\alpha\ \bm{u}_y、
    \bm{u}_y'=
    \sin\alpha\ \bm{u}_x+\cos\alpha\ \bm{u}_y
$$

この場合の変換はどちらも同じ形になることが分かる（共変と反変ベクトルの見分けがつかない）。一方で、斜交座標の場合だと









座標回転したときに、それは図にあるようにベクトルのほうは逆回転しているように見える。


ただ、力についてはポテンシャルの偏微分で書けたりすることもあり、判別できないかもしれない。

　

ここまでで上付き文字と下付き文字が同じ添え字がついているものというのは決まって総和になっていることから、よく省略（**Einsteinの縮約記法**）される。

$$
    \mathrm{d}\bm{s}=
    \mathrm{d}x^{i}\bm{u}_i=
    \mathrm{d}x'^{j}\bm{u}'_j、
    (\mathrm{d}\bm{s})^2=
    (\bm{u}_i\cdot\bm{u}_j)
    \mathrm{d}x^{i}\mathrm{d}x^{j}=
    (\bm{u}'_i\cdot\bm{u}'_j)
    \mathrm{d}x'^{i}\mathrm{d}x'^{j}
$$

また、基底ベクトル同士の内積というのは座標系の各地点の形状を示す重要な量となっており、

$$
    g_{ij}=\bm{u}_i\cdot\bm{u}_j、
    g'_{ij}=\bm{u}'_i\cdot\bm{u}'_j
$$

というように、一般に**Riemann計量**と呼ばれている。そのため、内積のほうも以下のように表記される。

$$
    (\mathrm{d}\bm{s})^2=
    g_{ij}
    \mathrm{d}x^{i}\mathrm{d}x^{j}=
    g'_{ij}
    \mathrm{d}x'^{i}\mathrm{d}x'^{j}
$$