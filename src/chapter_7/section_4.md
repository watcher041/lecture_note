
## 相対論的電磁気学

電磁気学においては、Maxwell方程式と呼ばれるものを用いてあらゆる現象を説明することができた。具体的に、ある系 K においては以下のように表される。

$$
  \nabla\cdot\bm{D}=\rho、
  \nabla\cdot\bm{B}=0、
  \nabla\times\bm{E}=-\pp{\bm{B}}{t}、
  \nabla\times\bm{H}=\bm{i}+\pp{\bm{D}}{t}
$$

ここで、$\bm{E}$ は電場、$\bm{B}$ は磁束密度、$\bm{D}$ は電束密度、$\bm{H}$ は磁場（磁界の強さ）、$\rho$ は電荷密度、$\bm{i}$ は電流密度である。真空になると $\bm{D}=\epsilon_0\bm{E}$、$\bm{B}=\mu_0\bm{H}$ となる。ここで $\epsilon_0$ は真空の誘電率、$\mu_0$ は真空の透磁率である。ここまでのことをふまえて、まず K' 系においてのMaxwell方程式を

$$
  \nabla'\cdot\bm{D}'=\rho'、
  \nabla'\cdot\bm{B}'=0、
  \nabla'\times\bm{E}'=
  -\pp{\bm{B}'}{t'}、
  \nabla'\times\bm{H}'=
  \bm{i}'+\pp{\bm{D}'}{t'}
$$

と相対性原理をもとに表せたとする。このうち、２番目と３番目の式は

$$
  \pp{B_{x}'}{x'}+
  \pp{B_{y}'}{y'}+
  \pp{B_{z}'}{z'}=0
$$
$$
  \pp{E_{z}'}{y'}-
  \pp{E_{y}'}{z'}=
  -\pp{B_{x}'}{t'}、
  \pp{E_{x}'}{z'}-
  \pp{E_{z}'}{x'}=
  -\pp{B_{y}'}{t'}、
  \pp{E_{y}'}{x'}-
  \pp{E_{x}'}{y'}=
  -\pp{B_{z}'}{t'}
$$

と各成分ごとに書き下せるが、ここでLotrentz変換

$$
    x'=\gamma(x-\beta w)、y'=y、z'=z、
    w'=\gamma\lr{w-\beta x}、
    \lr{
        \beta=\frac{V}{c}、
        \gamma=\frac{1}{\sqrt{1-\beta^2}}
    }
$$

から逆変換を求めると

$$
    x=\gamma(x'+\beta w')、y=y'、z=z'、
    w=\gamma\lr{w'+\beta x'}
$$


となることから、各偏微分は以下の通り変換される。

$$
    \pp{}{x'}=
    \pp{x}{x'}
    \pp{}{x}+
    \pp{w}{x'}
    \pp{}{w}=
    \gamma\pp{}{x}+
    \gamma\frac{V}{c^2}
    \pp{}{t}
$$
$$
    \pp{}{y'}=
    \pp{y}{y'}
    \pp{}{y}=
    \pp{}{y}
$$
$$
    \pp{}{z'}=
    \pp{z}{z'}
    \pp{}{z}=
    \pp{}{z}
$$
$$
    \pp{}{t'}=
    \pp{w'}{t'}
    \pp{}{w'}=
    c
    \lr{
        \pp{x}{w'}
        \pp{}{x}+
        \pp{w}{w'}
        \pp{}{w}
    }
    =
    \gamma V
    \pp{}{x}+
    \gamma
    \pp{}{t}
$$

となるため、これらを適用すると以下の形が得られる。

$$
    \gamma\pp{B_x'}{x}+
    \gamma\frac{V}{c^2}
    \pp{B_x'}{t}+
    \pp{B_y'}{y}+
    \pp{B_z'}{z}=0
$$
$$
    \pp{E_{z}'}{y}-
    \pp{E_{y}'}{z}=
    -\gamma V
    \pp{B_{x}'}{x}-
    \gamma
    \pp{B_{x}'}{t}
$$
$$
    \pp{E_{x}'}{z}-
    \gamma\pp{E_{z}'}{x}-
    \gamma\frac{V}{c^2}
    \pp{E_{z}'}{t}=
    -\gamma V
    \pp{B_{y}'}{x}-
    \gamma
    \pp{B_{y}'}{t}
$$
$$
    \gamma\pp{E_{y}'}{x}+
    \gamma\frac{V}{c^2}
    \pp{E_{y}'}{t}-
    \pp{E_{x}'}{y}=
    -\gamma V
    \pp{B_{z}'}{x}-
    \gamma
    \pp{B_{z}'}{t}
$$

このうち、２番目の式を

$$
    \gamma
    \pp{B_{x}'}{t}=
    -\gamma V
    \pp{B_{x}'}{x}-
    \pp{E_{z}'}{y}+
    \pp{E_{y}'}{z}
$$

と置き換えて１番目の式に代入すると以下の式が得られる。

$$
    \pp{B_x'}{x}+
    \pp{}{y}
    \gamma\lr{B_y'-\frac{V}{c^2}E_z'}+
    \pp{}{z}
    \gamma\lr{B_z'+\frac{V}{c^2}E_y'}=0
$$

一方で、今度は１番目の式を

$$
    \gamma\pp{B_x'}{x}=-
    \gamma\frac{V}{c^2}
    \pp{B_x'}{t}-
    \pp{B_y'}{y}-
    \pp{B_z'}{z}
$$

として二番目の式に代入すると以下の式が得られる。

$$
    \pp{}{y}\gamma(E_z'-VB_y')-
    \pp{}{z}\gamma(E_y'+VB_z')=
    -\pp{B_x'}{t}
$$

残りの３，４番目の式も整理することで以下の通りとなる。

$$
    \pp{E_{x}'}{z}-
    \gamma
    \pp{}{x}
    \lr{
        E_{z}'-VB_{y}'
    }=
    -
    \gamma
    \pp{}{t}
    \lr{
        B_{y}'-\frac{V}{c^2}E_{z}'
    }
    
$$
$$
    \pp{}{x}
    \gamma(E_{y}'+VB_{z}')-
    \pp{E_{x}'}{y}=
    -
    \gamma
    \pp{}{t}
    \lr{
        B_{z}'+\frac{V}{c^2}E_{y}'
    }
$$

ここまでの式をまとめると、以下の通りとなる。

$$
    \pp{B_x'}{x}+
    \pp{}{y}
    \gamma\lr{B_y'-\frac{V}{c^2}E_z'}+
    \pp{}{z}
    \gamma\lr{B_z'+\frac{V}{c^2}E_y'}=0
$$
$$
    \pp{}{y}\gamma(E_z'-VB_y')-
    \pp{}{z}\gamma(E_y'+VB_z')=
    -\pp{B_x'}{t}
$$
$$
    \pp{E_{x}'}{z}-
    \gamma
    \pp{}{x}
    \lr{
        E_{z}'-VB_{y}'
    }=
    -
    \gamma
    \pp{}{t}
    \lr{
        B_{y}'-\frac{V}{c^2}E_{z}'
    }
$$
$$
    \pp{}{x}
    \gamma(E_{y}'+VB_{z}')-
    \pp{E_{x}'}{y}=
    -
    \gamma
    \pp{}{t}
    \lr{
        B_{z}'+\frac{V}{c^2}E_{y}'
    }
$$

これらの式から、以下の関係式が成り立つことが予想される。

$$
    E_{x}=E_{x}'、
    E_{y}=\gamma\lr{E_{y}'+VB_{z}'}、
    E_{z}=\gamma\lr{E_{z}'-VB_{y}'}
$$
$$
    B_{x}=B_{x}'、
    B_{y}=\gamma\lr{B_{y}'-\frac{V}{c^2}E_{z}'}、
    B_{z}=\gamma\lr{B_{z}'+\frac{V}{c^2}E_{y}'}
$$

確認のため、これらの逆変換を求めるとこちらも符号が反転しているだけで対照的な形となっている。

$$
    E_{x}'=E_{x}、
    E_{y}'=\gamma\lr{E_{y}-VB_{z}}、
    E_{z}'=\gamma\lr{E_{z}+VB_{y}}
$$
$$
    B_{x}'=B_{x}、
    B_{y}'=\gamma\lr{B_{y}+\frac{V}{c^2}E_{z}}、
    B_{z}'=\gamma\lr{B_{z}-\frac{V}{c^2}E_{y}}
$$

ここで光速が真空中のものであることから

$$
    c=\frac{1}{\sqrt{\epsilon_0\mu_0}}
$$

であるから、**真空中である場合**上記の変換式は

$$
    \bm{D}'=\epsilon_0\bm{E}'、
    \bm{B}'=\mu_0\bm{H}'、
    \bm{D}=\epsilon_0\bm{E}、
    \bm{B}=\mu_0\bm{H}
$$

の関係式から以下の通りとなる。

$$
    D_{x}'=D_{x}、
    D_{y}'=\gamma\lr{D_{y}-\frac{V}{c^2}H_{z}}、
    D_{z}'=\gamma\lr{D_{z}+\frac{V}{c^2}H_{y}}
$$
$$
    H_{x}'=H_{x}、
    H_{y}'=\gamma\lr{H_{y}+VD_{z}}、
    H_{z}'=\gamma\lr{H_{z}-VD_{y}}
$$

これらの式を用いると、Maxwell方程式の１番目の式と4番目の式が

$$
    \pp{D_x'}{x'}+
    \pp{D_y'}{y'}+
    \pp{D_z'}{z'}=
    \rho'
$$

$$
    \pp{H_z'}{y'}-
    \pp{H_y'}{z'}=
    i_x'+
    \pp{D_x'}{t'}、
    \pp{H_x'}{z'}-
    \pp{H_z'}{x'}=
    i_y'+
    \pp{D_y'}{t'}、
    \pp{H_y'}{x'}-
    \pp{H_x'}{y'}=
    i_z'+
    \pp{D_z'}{t'}
$$

となるため、電荷密度と電流は以下の通りとなる。

$$
    \rho'=
    \gamma
    \lr{
        \pp{D_x}{x}+
        \pp{D_y}{y}+
        \pp{D_z}{z}
    }+
    \gamma\frac{V}{c^2}
    \LR{
        \pp{D_x}{t}-
        \lr{
            \pp{H_z}{y}-
            \pp{H_y}{z}
        }
    }=
    \gamma
    \lr{
        \rho-\frac{V}{c^2}i_x
    }
$$
$$
    i_x'=
    \gamma
    \LR{
        \lr{
            \pp{H_z}{y}-
            \pp{H_y}{z}
        }-
        \pp{D_x}{t}
    }-
    \gamma V
    \lr{
        \pp{D_x}{x}+
        \pp{D_y}{y}+
        \pp{D_z}{z}
    }=
    \gamma
    \lr{
        i_x-V\rho
    }
$$
$$
    i_y'=
    \lr{
        \pp{H_x}{z}-
        \pp{H_z}{x}
    }-
    \pp{D_y}{t}=
    i_y
$$
$$
    i_z'=
    \lr{
        \pp{H_y}{x}-
        \pp{H_x}{y}
    }-
    \pp{D_z}{t}=
    i_z
$$

一方で、**観測者に対して静止している媒質中**では

$$
    \bm{D}'=\bm{\epsilon}\bm{E}'=
    \begin{pmatrix}
        \epsilon_{11} & \epsilon_{12} & \epsilon_{13}\\
        \epsilon_{21} & \epsilon_{22} & \epsilon_{23}\\
        \epsilon_{31} & \epsilon_{32} & \epsilon_{33}
    \end{pmatrix}
    \begin{pmatrix}
        E_x'\\
        E_y'\\
        E_z'
    \end{pmatrix}
$$
$$
    \bm{B}'=\bm{\mu}\bm{H}'=
    \begin{pmatrix}
        \mu_{11} & \mu_{12} & \mu_{13}\\
        \mu_{21} & \mu_{22} & \mu_{23}\\
        \mu_{31} & \mu_{32} & \mu_{33}
    \end{pmatrix}
    \begin{pmatrix}
        H_x'\\
        H_y'\\
        H_z'
    \end{pmatrix}
$$
$$
    \bm{D}=\bm{\epsilon}\bm{E}、
$$
$$
    \bm{B}=\bm{\mu}\bm{H}
$$







### 媒質中の場合（補足）

ここまでは真空中で考えてきたが、水やガラスのような媒質の中ではどうなるだろうか。

まず光の速さについて、媒質中では屈折率 $n$ を用いて $c/n$ となる。これは媒質が静止している系での値であり、Lorentz変換に現れる $c$ とは別のものである。実際、媒質が静止している系では誘電率 $\epsilon$、透磁率 $\mu$ を用いて $D=\epsilon E$、$B=\mu H$ となるため、電磁波の速さは $1/\sqrt{\epsilon\mu}=c/n$ となる。$c$ はどの慣性系でも同じ値をとる速さの上限であるのに対し、$c/n$ は媒質の静止系で決まる値である。

次に変換則について、前に求めた $E, B$ の変換則は $\nabla\cdot B=0$ と $\nabla\times E=-\partial B/\partial t$ のみから導いたため、媒質があっても変わらない。同様に、自由電荷・自由電流に対する $\nabla\cdot D=\rho$ と $\nabla\times H=i+\partial D/\partial t$ からは

$$D_x=D_x'、D_y=\gamma\lr{D_y'+\frac{V}{c^2}H_z'}、D_z=\gamma\lr{D_z'-\frac{V}{c^2}H_y'}$$
$$H_x=H_x'、H_y=\gamma\lr{H_y'-VD_z'}、H_z=\gamma\lr{H_z'+VD_y'}$$

が得られ、これも媒質があっても同じ形になる。変わるのは $D$ と $E$、$B$ と $H$ の関係であり、$D=\epsilon E$、$B=\mu H$ は媒質が静止している系でのみ成り立つ。媒質が速度 $v$ で動いて見える系では、

$$D+\frac{v\times H}{c^2}=\epsilon(E+v\times B)、B-\frac{v\times E}{c^2}=\mu(H-v\times D)$$

という関係に置き換わる。

最後に、動いている媒質の中での光の速さを考える。K' 系で媒質が静止していて、光が $x$ 方向に速さ $c/n$ で進むとすると、K 系での光の速さ $u$ は、速度の変換式の逆変換から

$$u=\frac{c/n+V}{1+V/(nc)}\simeq\frac{c}{n}+V\lr{1-\frac{1}{n^2}}$$

となる（$V\ll c$ の最低次まで）。媒質の速さ $V$ に対して $1-1/n^2$ だけ引きずられることになり、これはFresnelの引きずり係数と呼ばれ、Fizeauの流水の実験で確かめられている。なお $n>1$、$V<c$ のとき $u<c$ である。

また、媒質中では荷電粒子が $c/n$ より速く進むことができ（Cherenkov放射）、このとき $c$ は超えない。以上のように、媒質中の光が遅いことは、光速度不変の原理や相対性原理と矛盾しない。