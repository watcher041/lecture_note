
## 剛体の力学

　質点系における運動方程式というのは
$$
    m_i
    \frac{\mathrm{d}^2\bm{r}_i}
    {\mathrm{d}t^2}=
    \bm{F}_{i}+
    \sum_{j=1(j\neq i)}^{N}\bm{F}_{ij}
$$

であるが、前回扱った回転の場合だとどうなるか見るために $\bm{r}_i$ と外積をとって質点全体で総和をとると

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

並進運動を取り扱った際に、重心 $\bm{r}_G$ に外力 $\bm{F}$ が働くものとしていたが回転でも同様にいえるため、

$$
    \frac{\mathrm{d}\bm{L}_G}{\mathrm{d}t}=
    \bm{N}_G、
    \bm{L}_G=m(\bm{r}_G\times\bm{v}_G)、
    \bm{N}_G=\bm{r}_G\times\bm{F}
$$
$$
    \bm{r}_G=
    \frac{1}{m}
    \sum_{i=1}^N
    m_i\bm{r}_i、
    \bm{v}_G=
    \frac{1}{m}
    \sum_{i=1}^N
    m_i\bm{v}_i、
    m=
    \sum_{i=1}^N
    m_i、
    \bm{F}=
    \sum_{i=1}^N
    \bm{F}_i
$$

という関係もあることになる。ここで先ほどの回転の運動方程式にて重心がどのように関係しているかを重心からの質点の位置と速度を $\bm{r}_i',\bm{v}_i'$ として以下のように置き換えてみる。

$$
    \bm{r}_i=\bm{r}_G+\bm{r}'_i、
    \bm{v}_i=\bm{v}_G+\bm{v}'_i
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
        \bm{r}_G+\bm{r}'_i
    \right)
    \times
    (
        \bm{v}_G+\bm{v}'_i
    )\\
    &=
    m(\bm{r}_G\times\bm{v}_G)+
    \bm{r}_G\times
    \left(
        \sum_{i=1}^N
        m_i\bm{v}'_i
    \right)+
    \left(
        \sum_{i=1}^N
        m_i\bm{r}'_i
    \right)\times\bm{v}_G+
    \sum_{i=1}^N
    m_i(\bm{r}'_i\times\bm{v}'_i)
    \end{align*}
$$

となるが、ここで重心の関係式も踏まえて

$$
    \sum_{i=1}^N
    m_i\bm{r}'_i=
    \sum_{i=1}^N
    m_i(\bm{r}_G-\bm{r}_i)=
    m\bm{r}_G-
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
    m(\bm{r}_G\times\bm{v}_G)+
    \sum_{i=1}^N
    m_i(\bm{r}'_i\times\bm{v}'_i)=
    \bm{L}_G+\bm{L}'
$$

同じように、モーメントについても

$$
    \bm{N}=
    \sum_{i=1}^N
    (\bm{r}_i\times\bm{F}_{i})=
    (\bm{r}_G\times\bm{F})+
    \sum_{i=1}^N
    (\bm{r}'_i\times\bm{F}_{i})=
    \bm{N}_G+\bm{N}'
$$

であるから、重心自体の回転と重心の周囲の回転との二つに分けることができる。ところが、重心の回転運動については前回の重心の運動方程式にも含まれている（重心が回転しているかも分かる）ため、回転については最終的に重心周りの運動のみ取り扱えばよいことになる。

$$
    \frac{\mathrm{d}\bm{L}'}{\mathrm{d}t}=
    \bm{N}'、
    \bm{L}'=
    \sum_{i=1}^N 
    m_i(\bm{r}_i'\times\bm{v}_i')、
    \bm{N}'=
    \sum_{i=1}^N 
    (\bm{r}_i'\times\bm{F}_i)
$$




そして、これらを角速度を用いて記述すると剛体であることを踏まえると重心からの位置が変化しないことから

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    (\bm{r}'\cdot\bm{r}')=0
    \rightarrow
    (\bm{r}'\cdot\bm{v}')=0
$$

となることから、速度は位置ベクトルと直交した方向を向く。そのため、速度は外積の形で書けるものと思われる。

$$
    \bm{v}'=\bm{\omega}'\times\bm{r}'
$$

これを角運動量の式に代入すると

$$
    \bm{L}'=
    \sum_{i=1}^N
    m_i(\bm{r}'_i\times\bm{v}'_i)=
    \sum_{i=1}^N
    \left[
        m_i(\bm{r}'_i\cdot\bm{r}'_i)\cdot\bm{\omega}_i'-
        m_i(\bm{r}'_i\cdot\bm{\omega}_i')\cdot\bm{r}'_i
    \right]
$$