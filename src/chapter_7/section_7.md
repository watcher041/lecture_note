
## 共変ベクトルと反変ベクトル

　ある二つの座標系において座標変換が行われたときに、ベクトルは以下の通り変換の方法によって二通りに分けられる。

$$
    \begin{cases}
        ・\bm{a}=(a_1,a_2,\cdots,a_N)&：共変ベクトル（下付き添え字で区別）\\
        ・\bm{b}=(b^1,b^2,\cdots,b^{N})&：反変ベクトル（上付き添え字で区別）
    \end{cases}
$$

例として、共変ベクトルは基底ベクトル $\bm{u}$ と同じ変換をするものであり、ベクトル成分の微小変位 $\mathrm{d}x$ はそれとは分子と分母が逆の変換を行われるため反変ベクトルとなる。そのため座標系も多くの場合、上付きで $(x^1,x^2,\cdots,x^N)$ というように表記される（ベクトル成分 $x$ 自体は必ずしも反変ベクトルとならないことに注意すること）。

　そのことを踏まえて、座標系 $(x^1,x^2,\cdots,x^N)$ から座標系 $(x'^1,x'^2,\cdots,x'^{N'})$ に変換した場合、各ベクトルは

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

というように表記される。同じように、微小ベクトル $\mathrm{d}\bm{s}$ についても以下のようになる。

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
    g_{ij}=\bm{u}_i\cdot\bm{u}_j
$$

というように、一般に**Riemann計量**と呼ばれている。そのため、内積のほうも以下のように表記される。

$$
    (\mathrm{d}\bm{s})^2=
    g_{ij}
    \mathrm{d}x^{i}\mathrm{d}x^{j}=
    g'_{ij}
    \mathrm{d}x'^{i}\mathrm{d}x'^{j}
$$