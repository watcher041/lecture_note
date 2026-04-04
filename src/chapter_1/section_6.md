

## 剛体の力学

　前回の回転運動に関する内容を、今度は質点系においても適用してみよう。質点系での $i$ 番目の質点の運動方程式は
$$
    m_i
    \frac{\mathrm{d}^2\boldsymbol{r}_i}
    {\mathrm{d}t^2}=
    \boldsymbol{F}_{i}+
    \sum_{j=1(j\neq i)}^{N}\boldsymbol{F}_{ij}
$$

であったが、 $\boldsymbol{r}_i$ と外積をとって質点全体で総和をとると

$$
    \sum_{i=1}^N
    m_i
    \left(
    \boldsymbol{r}_i\times
    \frac{\mathrm{d}^2\boldsymbol{r}_i}
    {\mathrm{d}t^2}
    \right)=
    \sum_{i=1}^N
    (\boldsymbol{r}_i\times\boldsymbol{F}_{i})+
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\boldsymbol{r}_i\times\boldsymbol{F}_{ij})
$$

となり、ここで右辺第2項目に関して $\boldsymbol{F}_{ij}=-\boldsymbol{F}_{ji}$ を利用すれば

$$
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\boldsymbol{r}_i\times\boldsymbol{F}_{ij})=
    \frac{1}{2}
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\boldsymbol{r}_i\times\boldsymbol{F}_{ij}+
    \boldsymbol{r}_j\times\boldsymbol{F}_{ji})=
    \sum_{i=1}^N
    \sum_{j=1(j\neq i)}^{N}
    (\boldsymbol{r}_i-\boldsymbol{r}_j)
    \times\boldsymbol{F}_{ij}
$$

であるため、$\boldsymbol{r}_i-\boldsymbol{r}_j$ と $\boldsymbol{F}_{ij}$ が平行であることから0になる。そのため、最終的には以下の形になる。

$$
    \sum_{i=1}^N
    m_i
    \left(
    \boldsymbol{r}_i\times
    \frac{\mathrm{d}^2\boldsymbol{r}_i}
    {\mathrm{d}t^2}
    \right)=
    \sum_{i=1}^N
    (\boldsymbol{r}_i\times\boldsymbol{F}_{i})
$$

更に速度の形に変形すると、左辺は

$$
    \sum_{i=1}^N
    m_i
    \left(
    \boldsymbol{r}_i\times
    \frac{\mathrm{d}^2\boldsymbol{r}_i}
    {\mathrm{d}t^2}
    \right)=
    \sum_{i=1}^N
    m_i
    \left(
    \boldsymbol{r}_i\times
    \frac{\mathrm{d}\boldsymbol{v}_i}
    {\mathrm{d}t}
    \right)=
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left[
    \sum_{i=1}^N
    m_i
    \left(
    \boldsymbol{r}_i\times\boldsymbol{v}_i
    \right)
    \right]

$$

となり、以下のように質点系でも回転の運動方程式が成り立つことが分かる。

$$
    \frac{\mathrm{d}\boldsymbol{L}}{\mathrm{d}t}=
    \boldsymbol{N}、
    \boldsymbol{L}=
    \sum_{i=1}^N
    m_i(\boldsymbol{r}_i\times\boldsymbol{v}_i)、
    \boldsymbol{N}=
    \sum_{i=1}^N
    (\boldsymbol{r}_i\times\boldsymbol{F}_{i})
$$

並進運動を取り扱った際に、重心 $\boldsymbol{r}_G$ に外力 $\boldsymbol{F}$ が働くものとしていたが回転でも同様にいえるため、

$$
    \frac{\mathrm{d}\boldsymbol{L}_G}{\mathrm{d}t}=
    \boldsymbol{N}_G、
    \boldsymbol{L}_G=m(\boldsymbol{r}_G\times\boldsymbol{v}_G)、
    \boldsymbol{N}_G=\boldsymbol{r}_G\times\boldsymbol{F}
$$
$$
    \boldsymbol{r}_G=
    \frac{1}{m}
    \sum_{i=1}^N
    m_i\boldsymbol{r}_i、
    \boldsymbol{v}_G=
    \frac{1}{m}
    \sum_{i=1}^N
    m_i\boldsymbol{v}_i、
    m=
    \sum_{i=1}^N
    m_i、
    \boldsymbol{F}=
    \sum_{i=1}^N
    \boldsymbol{F}_i
$$

という関係もあることになる。ここで先ほどの回転の運動方程式にて重心がどのように関係しているかを重心からの質点の位置と速度を $\boldsymbol{r}_i',\boldsymbol{v}_i'$ として以下のように置き換えてみる。

$$
    \boldsymbol{r}_i=\boldsymbol{r}_G+\boldsymbol{r}'_i、
    \boldsymbol{v}_i=\boldsymbol{v}_G+\boldsymbol{v}'_i
$$

このようにしたときに、まず角運動量は

$$
    \begin{align*}
    \boldsymbol{L}
    &=
    \sum_{i=1}^N
    m_i(\boldsymbol{r}_i\times\boldsymbol{v}_i)
    =
    \sum_{i=1}^N
    m_i
    \left(
        \boldsymbol{r}_G+\boldsymbol{r}'_i
    \right)
    \times
    (
        \boldsymbol{v}_G+\boldsymbol{v}'_i
    )\\
    &=
    m(\boldsymbol{r}_G\times\boldsymbol{v}_G)+
    \boldsymbol{r}_G\times
    \left(
        \sum_{i=1}^N
        m_i\boldsymbol{v}'_i
    \right)+
    \left(
        \sum_{i=1}^N
        m_i\boldsymbol{r}'_i
    \right)\times\boldsymbol{v}_G+
    \sum_{i=1}^N
    m_i(\boldsymbol{r}'_i\times\boldsymbol{v}'_i)
    \end{align*}
$$

となるが、ここで重心の関係式も踏まえて

$$
    \sum_{i=1}^N
    m_i\boldsymbol{r}'_i=
    \sum_{i=1}^N
    m_i(\boldsymbol{r}_G-\boldsymbol{r}_i)=
    m\boldsymbol{r}_G-
    \sum_{i=1}^N
    m_i\boldsymbol{r}_i=\boldsymbol{0}
$$

となることから、これを時間微分することで

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \left(
        \sum_{i=1}^N 
        m_i\boldsymbol{r}'_i
    \right)=
    \sum_{i=1}^N 
    m_i\boldsymbol{v}'_i=
    \boldsymbol{0}
$$

となることから、角運動量は以下の通りとなる。

$$
    \boldsymbol{L}=
    m(\boldsymbol{r}_G\times\boldsymbol{v}_G)+
    \sum_{i=1}^N
    m_i(\boldsymbol{r}'_i\times\boldsymbol{v}'_i)=
    \boldsymbol{L}_G+\boldsymbol{L}'
$$

同じように、モーメントについても

$$
    \boldsymbol{N}=
    \sum_{i=1}^N
    (\boldsymbol{r}_i\times\boldsymbol{F}_{i})=
    (\boldsymbol{r}_G\times\boldsymbol{F})+
    \sum_{i=1}^N
    (\boldsymbol{r}'_i\times\boldsymbol{F}_{i})=
    \boldsymbol{N}_G+\boldsymbol{N}'
$$

であるから、重心自体の回転と重心の周囲の回転との二つに分けることができる。ところが、重心の回転運動については前回の重心の運動方程式にも含まれている（重心が回転しているかも分かる）ため、回転については最終的に重心周りの運動のみ取り扱えばよいことになる。

$$
    \frac{\mathrm{d}\boldsymbol{L}'}{\mathrm{d}t}=
    \boldsymbol{N}'、
    \boldsymbol{L}'=
    \sum_{i=1}^N 
    m_i(\boldsymbol{r}_i'\times\boldsymbol{v}_i')、
    \boldsymbol{N}'=
    \sum_{i=1}^N 
    (\boldsymbol{r}_i'\times\boldsymbol{F}_i)
$$

　ここまでのことを踏まえて、一般的に運動は以下の二つの式によって導出されるものと考えられる。

$$
    \frac{\mathrm{d}\boldsymbol{p}}{\mathrm{d}t}=
    \boldsymbol{F}
    （重心の並進運動を記述）
$$
$$
    \frac{\mathrm{d}\boldsymbol{L}}{\mathrm{d}t}=
    \boldsymbol{N}
    （重心周りの回転運動を記述）
$$

しかし、これらは物体の変形を考慮されておらず**変形しない物体にしか適用されない**ものとなっている。そのため、この二つの式のみ従う物体はよく**剛体**（変形しない物体）と呼ばれている。また、変形しないというのは重心からの質点までの変位 $|\boldsymbol{r}'|$ が変化しないということであるため、以下の関係が成りたつことになる。

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    |\boldsymbol{r}'|=
    \frac{\mathrm{d}r'}{\mathrm{d}t}=0、
    \boldsymbol{r}'=\boldsymbol{r}-\boldsymbol{r}_G
$$

あるいは、$|\boldsymbol{r}'|=\sqrt{\boldsymbol{r}'\cdot\boldsymbol{r}'}$ であることから以下の形でも表される。

$$
    \frac{\mathrm{d}}{\mathrm{d}t}
    \sqrt{\boldsymbol{r}'\cdot\boldsymbol{r}'}=0
    \rightarrow
    (\boldsymbol{r}'\cdot\boldsymbol{v}')=0
$$

このことから、回転の速度ベクトルは位置ベクトルと直交した方向を向いていることが分かる。一方で、角運動量において

$$
    \boldsymbol{L}'=m(\boldsymbol{r}'\times\boldsymbol{v}')=
    I\boldsymbol{\omega}、
    I=mr'^2
$$

というようになっていたことから、角速度が

$$
    \omega=
    \frac{\boldsymbol{r}'}{r'}\times
    \frac{\boldsymbol{v}'}{r'}
$$

であることから、左側から $\boldsymbol{r}'$ の外積をとってみるとベクトル三重積の公式から

$$
    \boldsymbol{r}'\times\boldsymbol{\omega}=
    \left(
        \boldsymbol{r}'\cdot
        \frac{\boldsymbol{v}'}{r'}
    \right)\cdot
   \frac{\boldsymbol{r}'}{r'} -
    \left(
        \boldsymbol{r}'\cdot
        \frac{\boldsymbol{r}'}{r'}
    \right)\cdot
    \frac{\boldsymbol{v}'}{r'}=
    \frac{\boldsymbol{r}'}{r'^2}(\boldsymbol{r}'\cdot\boldsymbol{v}')
    -\boldsymbol{v}'
$$

となる。ここで、回転の速度ベクトルと位置ベクトルが直交していることも踏まえると、速度ベクトルは以下のようになる。

$$
    \boldsymbol{v}'=\boldsymbol{\omega}\times\boldsymbol{r}'
$$

そのため、これを

$$
    \boldsymbol{L}'=
    \sum_{i=1}^N
    m_i(\boldsymbol{r}'_i\times\boldsymbol{v}'_i)=
    \sum_{i=1}^N
    \left[
        m_i(\boldsymbol{r}'_i\cdot\boldsymbol{r}'_i)\cdot\boldsymbol{\omega}_i-
        m_i(\boldsymbol{r}'_i\cdot\boldsymbol{\omega}_i)\cdot\boldsymbol{r}'_i
    \right]
$$

というように展開すると

$$
    L_x'=
    \sum_{i=1}^N
    m_i
    \left[
        (y_i'^2+z_i'^2)\omega_{i,x}-
        x_i'y_i'\omega_{i,y}-
        x_i'z_i'\omega_{i,z}
    \right]
$$
$$
    L_y'=
    \sum_{i=1}^N
    m_i
    \left[
        -x_i'y_i'\omega_{i,x}+
        (x_i'^2+z_i'^2)\omega_{i,y}-
        y_i'z_i'\omega_{i,z}
    \right]
$$
$$
    L_z'=
    \sum_{i=1}^N
    m_i
    \left[
        -x_i'z_i'\omega_{i,x}-
        y_i'z_i'\omega_{i,y}+
        (x_i'^2+y_i'^2)\omega_{i,z}
    \right]
$$

ということになることから、慣性モーメントを用いると

$$
    \boldsymbol{L}'=\boldsymbol{I}'\boldsymbol{\omega}'、
    \boldsymbol{I}'=
    \sum_{i=1}^{N}
    m_i
    \begin{pmatrix}
        y_i'^2+z_i'^2 &
        -x_i'y_i'     &
        -x_i'z_i'     \\
        -x_i'y_i'     &
        y_i'^2+z_i'^2 &
        -y_i'z_i'     \\
        -x_i'z_i'     &
        -y_i'z_i'     &
        x_i'^2+y_i'^2    
    \end{pmatrix}
$$

となる。