
## 相対論的電磁気学

電磁気学においては、Maxwell方程式と呼ばれるものを用いてあらゆる現象を説明することができた。具体的に、ある系 K においては以下のように表される。

$$
  \nabla\cdot\bm{D}=\rho、
  \nabla\cdot\bm{B}=0、
  \nabla\times\bm{E}=-\frac{\partial \bm{B}}{\partial t}、
  \nabla\times\bm{H}=\bm{i}+\frac{\partial \bm{D}}{\partial t}
$$

ここで、$\bm{E}$ は電場、$\bm{B}$ は磁束密度、$\bm{D}$ は電束密度、$\bm{H}$ は磁場（磁界の強さ）、$\rho$ は電荷密度、$\bm{i}$ は電流密度である。真空になると $\bm{D}=\epsilon_0\bm{E}$、$\bm{B}=\mu_0\bm{H}$ となる。ここで $\epsilon_0$ は真空の誘電率、$\mu_0$ は真空の透磁率である。ここまでのことをふまえて、まず K' 系においてのMaxwell方程式を

$$
  \nabla'\cdot\bm{D}'=\rho'、
  \nabla'\cdot\bm{B}'=0、
  \nabla'\times\bm{E}'=
  -\frac{\partial \bm{B}'}{\partial t'}、
  \nabla'\times\bm{H}'=
  \bm{i}'+\frac{\partial \bm{D}'}{\partial t'}
$$

と相対性原理をもとに表せたとする。このうち、２番目と３番目の式は

$$
  \frac{\partial B_{x}'}{\partial x'}+
  \frac{\partial B_{y}'}{\partial y'}+
  \frac{\partial B_{z}'}{\partial z'}=0
$$
$$
  \frac{\partial E_{z}'}{\partial y'}-
  \frac{\partial E_{y}'}{\partial z'}=
  -\frac{\partial B_{x}'}{\partial t'}、
  \frac{\partial E_{x}'}{\partial z'}-
  \frac{\partial E_{z}'}{\partial x'}=
  -\frac{\partial B_{y}'}{\partial t'}、
  \frac{\partial E_{y}'}{\partial x'}-
  \frac{\partial E_{x}'}{\partial y'}=
  -\frac{\partial B_{z}'}{\partial t'}
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
    \frac{\partial}{\partial x'}=
    \frac{\partial x}{\partial x'}
    \frac{\partial}{\partial x}+
    \frac{\partial w}{\partial x'}
    \frac{\partial}{\partial w}=
    \gamma\frac{\partial}{\partial x}+
    \gamma\frac{V}{c^2}
    \frac{\partial}{\partial t}
$$
$$
    \frac{\partial}{\partial y'}=
    \frac{\partial y}{\partial y'}
    \frac{\partial}{\partial y}=
    \frac{\partial}{\partial y}
$$
$$
    \frac{\partial}{\partial z'}=
    \frac{\partial z}{\partial z'}
    \frac{\partial}{\partial z}=
    \frac{\partial}{\partial z}
$$
$$
    \frac{\partial}{\partial t'}=
    \frac{\partial w'}{\partial t'}
    \frac{\partial}{\partial w'}=
    c
    \lr{
        \frac{\partial x}{\partial w'}
        \frac{\partial}{\partial x}+
        \frac{\partial w}{\partial w'}
        \frac{\partial}{\partial w}
    }
    =
    \gamma V
    \frac{\partial}{\partial x}+
    \gamma
    \frac{\partial}{\partial t}
$$

となるため、これらを適用すると以下の形が得られる。

$$
    \gamma\frac{\partial B_x'}{\partial x}+
    \gamma\frac{V}{c^2}
    \frac{\partial B_x'}{\partial t}+
    \frac{\partial B_y'}{\partial y}+
    \frac{\partial B_z'}{\partial z}=0
$$
$$
    \frac{\partial E_{z}'}{\partial y}-
    \frac{\partial E_{y}'}{\partial z}=
    -\gamma V
    \frac{\partial B_{x}'}{\partial x}-
    \gamma
    \frac{\partial B_{x}'}{\partial t}
$$
$$
    \frac{\partial E_{x}'}{\partial z}-
    \gamma\frac{\partial E_{z}'}{\partial x}-
    \gamma\frac{V}{c^2}
    \frac{\partial E_{z}'}{\partial t}=
    -\gamma V
    \frac{\partial B_{y}'}{\partial x}-
    \gamma
    \frac{\partial B_{y}'}{\partial t}
$$
$$
    \gamma\frac{\partial E_{y}'}{\partial x}+
    \gamma\frac{V}{c^2}
    \frac{\partial E_{y}'}{\partial t}-
    \frac{\partial E_{x}'}{\partial y}=
    -\gamma V
    \frac{\partial B_{z}'}{\partial x}-
    \gamma
    \frac{\partial B_{z}'}{\partial t}
$$

このうち、２番目の式を

$$
    \gamma
    \frac{\partial B_{x}'}{\partial t}=
    -\gamma V
    \frac{\partial B_{x}'}{\partial x}-
    \frac{\partial E_{z}'}{\partial y}+
    \frac{\partial E_{y}'}{\partial z}
$$

と置き換えて１番目の式に代入すると以下の式が得られる。

$$
    \frac{\partial B_x'}{\partial x}+
    \frac{\partial}{\partial y}
    \gamma\lr{B_y'-\frac{V}{c^2}E_z'}+
    \frac{\partial}{\partial z}
    \gamma\lr{B_z'+\frac{V}{c^2}E_y'}=0
$$

一方で、今度は１番目の式を

$$
    \gamma\frac{\partial B_x'}{\partial x}=-
    \gamma\frac{V}{c^2}
    \frac{\partial B_x'}{\partial t}-
    \frac{\partial B_y'}{\partial y}-
    \frac{\partial B_z'}{\partial z}
$$

として二番目の式に代入すると以下の式が得られる。

$$
    \frac{\partial}{\partial y}\gamma(E_z'-VB_y')-
    \frac{\partial}{\partial z}\gamma(E_y'+VB_z')=
    -\frac{\partial B_x'}{\partial t}
$$

残りの３，４番目の式も整理することで以下の通りとなる。

$$
    \frac{\partial E_{x}'}{\partial z}-
    \gamma
    \frac{\partial}{\partial x}
    \lr{
        E_{z}'-VB_{y}'
    }=
    -
    \gamma
    \frac{\partial}{\partial t}
    \lr{
        B_{y}'-\frac{V}{c^2}E_{z}'
    }
    
$$
$$
    \frac{\partial}{\partial x}
    \gamma(E_{y}'+VB_{z}')-
    \frac{\partial E_{x}'}{\partial y}=
    -
    \gamma
    \frac{\partial}{\partial t}
    \lr{
        B_{z}'+\frac{V}{c^2}E_{y}'
    }
$$

ここまでの式をまとめると、以下の通りとなる。

$$
    \frac{\partial B_x'}{\partial x}+
    \frac{\partial}{\partial y}
    \gamma\lr{B_y'-\frac{V}{c^2}E_z'}+
    \frac{\partial}{\partial z}
    \gamma\lr{B_z'+\frac{V}{c^2}E_y'}=0
$$
$$
    \frac{\partial}{\partial y}\gamma(E_z'-VB_y')-
    \frac{\partial}{\partial z}\gamma(E_y'+VB_z')=
    -\frac{\partial B_x'}{\partial t}
$$
$$
    \frac{\partial E_{x}'}{\partial z}-
    \gamma
    \frac{\partial}{\partial x}
    \lr{
        E_{z}'-VB_{y}'
    }=
    -
    \gamma
    \frac{\partial}{\partial t}
    \lr{
        B_{y}'-\frac{V}{c^2}E_{z}'
    }
$$
$$
    \frac{\partial}{\partial x}
    \gamma(E_{y}'+VB_{z}')-
    \frac{\partial E_{x}'}{\partial y}=
    -
    \gamma
    \frac{\partial}{\partial t}
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

ここで、さらに**真空中であることを考慮する（光速が真空中での速度であるため）と**光速が

$$
    c=\frac{1}{\sqrt{\epsilon_0\mu_0}}
$$

であるから、上記の変換式は　

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
    \frac{\partial D_x'}{\partial x'}+
    \frac{\partial D_y'}{\partial y'}+
    \frac{\partial D_z'}{\partial z'}=
    \rho'
$$

$$
    \frac{\partial H_z'}{\partial y'}-
    \frac{\partial H_y'}{\partial z'}=
    i_x'+
    \frac{\partial D_x'}{\partial t'}、
    \frac{\partial H_x'}{\partial z'}-
    \frac{\partial H_z'}{\partial x'}=
    i_y'+
    \frac{\partial D_y'}{\partial t'}、
    \frac{\partial H_y'}{\partial x'}-
    \frac{\partial H_x'}{\partial y'}=
    i_z'+
    \frac{\partial D_z'}{\partial t'}
$$

となるため、電荷密度と電流は以下の通りとなる。

$$
    \rho'=
    \gamma
    \lr{
        \frac{\partial D_x}{\partial x}+
        \frac{\partial D_y}{\partial y}+
        \frac{\partial D_z}{\partial z}
    }+
    \gamma\frac{V}{c^2}
    \left[
        \frac{\partial D_x}{\partial t}-
        \lr{
            \frac{\partial H_z}{\partial y}-
            \frac{\partial H_y}{\partial z}
        }
    \right]=
    \gamma
    \lr{
        \rho-\frac{V}{c^2}i_x
    }
$$
$$
    i_x'=
    \gamma
    \left[
        \lr{
            \frac{\partial H_z}{\partial y}-
            \frac{\partial H_y}{\partial z}
        }-
        \frac{\partial D_x}{\partial t}
    \right]-
    \gamma V
    \lr{
        \frac{\partial D_x}{\partial x}+
        \frac{\partial D_y}{\partial y}+
        \frac{\partial D_z}{\partial z}
    }=
    \gamma
    \lr{
        i_x-V\rho
    }
$$
$$
    i_y'=
    \lr{
        \frac{\partial H_x}{\partial z}-
        \frac{\partial H_z}{\partial x}
    }-
    \frac{\partial D_y}{\partial t}=
    i_y
$$
$$
    i_z'=
    \lr{
        \frac{\partial H_y}{\partial x}-
        \frac{\partial H_x}{\partial y}
    }-
    \frac{\partial D_z}{\partial t}=
    i_z
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