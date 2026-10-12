
## 相対論的電磁気学

電磁気学においては、以下のMaxwell方程式を用いて説明することができた。
$$
  \mathrm{div}\bm{D}=\rho、
  \mathrm{div}\bm{B}=0、
  \mathrm{rot}\bm{E}=-\frac{\partial \bm{B}}{\partial t}、
  \mathrm{rot}\bm{H}=\bm{i}+\frac{\partial \bm{D}}{\partial t}
$$

このうち、２番目と３番目の式に関して
$$
  \frac{\partial B_{x}}{\partial x}+\frac{\partial B_{y}}{\partial y}+\frac{\partial B_{z}}{\partial z}=0
$$
$$
  \frac{\partial E_{z}}{\partial y}-\frac{\partial E_{y}}{\partial z}=-\frac{\partial B_{x}}{\partial t}、
  \frac{\partial E_{x}}{\partial z}-\frac{\partial E_{z}}{\partial x}=-\frac{\partial B_{y}}{\partial t}、
  \frac{\partial E_{y}}{\partial x}-\frac{\partial E_{x}}{\partial y}=-\frac{\partial B_{z}}{\partial t}
$$
と各成分ごとに書き下せるが、ここでLotrentz変換を導入すると
$$
    \frac{\partial}{\partial x}=
    \gamma\frac{\partial}{\partial x'}-\gamma\frac{V}{c^2}\frac{\partial}{\partial t'}、
    \frac{\partial}{\partial y}= \frac{\partial}{\partial y'}、
    \frac{\partial}{\partial z}= \frac{\partial}{\partial z'}、
    \frac{\partial}{\partial t}=
    -\gamma V\frac{\partial}{\partial x'}+\gamma\frac{\partial}{\partial t'}
$$
となるため、これらを適用すると以下の形が得られる。
$$
    \gamma\frac{\partial B_x}{\partial x'}+
    \frac{\partial B_y}{\partial y'}+
    \frac{\partial B_z}{\partial z'}=\gamma\frac{V}{c^2}\frac{\partial B_x}{\partial t'}
$$
$$
    -\gamma V\frac{\partial B_{x}}{\partial x'}+
    \frac{\partial E_{z}}{\partial y'}-\frac{\partial E_{y}}{\partial z'}=
    -\gamma\frac{\partial B_{x}}{\partial t'}
$$
$$
    \frac{\partial E_{x}}{\partial z'}-
    \frac{\partial }{\partial x'}\gamma\left(E_{z}+VB_{y}\right)=
    -\frac{\partial }{\partial t'}\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)
$$
$$
    \frac{\partial }{\partial x'}\gamma\left(E_{y}-VB_{z}\right)-
    \frac{\partial E_{x}}{\partial  y'}=
    -\frac{\partial }{\partial t'}\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$
であるが、ここで1番目の式と2番目の式を
$$
    -\gamma V\frac{\partial B_x}{\partial x'}-
    V\frac{\partial B_y}{\partial y'}-
    V\frac{\partial B_z}{\partial z'}=-\gamma\frac{V^2}{c^2}\frac{\partial B_x}{\partial t'}
$$
$$
    \gamma V\frac{\partial B_{x}}{\partial x'}-
    \frac{\partial E_{z}}{\partial y'}+\frac{\partial E_{y}}{\partial z'}=
    \gamma\frac{\partial B_{x}}{\partial t'}
$$
という形にして一番目の式に2番目の式に代入することで
$$
    \frac{\partial B_x}{\partial x'}+
    \frac{\partial}{\partial y'}\gamma\left(B_y+\frac{V}{c^2}E_z\right)+
    \frac{\partial}{\partial z'}\gamma\left(B_z-\frac{V}{c^2}E_y\right)=0
$$
となる。または足し合わせると以下のようになる。
$$
    \frac{\partial}{\partial y'}\gamma(E_z+VB_y)-
    \frac{\partial}{\partial z'}\gamma(E_y-VB_z)=
    -\frac{\partial B_x}{\partial t'}
$$
以上のことをひっくるめて、改めて整理した式を書くと以下の通りとなる。
$$
    \frac{\partial B_x}{\partial x'}+
    \frac{\partial}{\partial y'}\gamma\left(B_y+\frac{V}{c^2}E_z\right)+
    \frac{\partial}{\partial z'}\gamma\left(B_z-\frac{V}{c^2}E_y\right)=0
$$
$$
    \frac{\partial}{\partial y'}\gamma(E_z+VB_y)-
    \frac{\partial}{\partial z'}\gamma(E_y-VB_z)=
    -\frac{\partial B_x}{\partial t'}
$$
$$
    \frac{\partial E_{x}}{\partial z'}-
    \frac{\partial }{\partial x'}\gamma\left(E_{z}+VB_{y}\right)=
    -\frac{\partial }{\partial t'}\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)
$$
$$
    \frac{\partial }{\partial x'}\gamma\left(E_{y}-VB_{z}\right)-
    \frac{\partial E_{x}}{\partial  y'}=
    -\frac{\partial }{\partial t'}\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$
これらの式から、以下の関係式が成り立つことがわかる。
$$
    E_{x'}=E_{x}、
    E_{y'}=\gamma\left(E_{y}-VB_{z}\right)、
    E_{z'}=\gamma\left(E_{z}+VB_{y}\right)
$$
$$
    B_{x'}=B_{x}、
    B_{y'}=\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)、
    B_{z'}=\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$
確認の例として、電荷 $q$ の点電荷に電場 $\bm{E}$' と磁場 $\bm{B}'$ が働いているとすると
$$
    \frac{\mathrm{d}\bm{p}'}{\mathrm{d}\tau'}=\bm{f}=
    \frac{1}{\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
    \left[
    q\bm{E}'+q(\bm{v}'\times\bm{B}')
    \right]
$$
$$
    \frac{\mathrm{d}E'}{\mathrm{d}\tau'}=
    \frac{1}{\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
    \left[
       q\bm{E}'+q(\bm{v}'\times\bm{B}') 
    \right]\cdot\bm{v}'=
    \frac{1}{\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
    (\bm{v}'\cdot q\bm{E}')
$$
となるが、各成分に対して変換すると以下の通りになる。
$$
    \frac{\mathrm{d}p_x'}{\mathrm{d}\tau'}=
    \frac{1}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \gamma
    \left[
        qE_x+
        q(v_yB_z-v_zB_y)-
        \frac{V}{c^2}(\bm{v}\cdot q\bm{E})
    \right]
$$
$$
    \frac{\mathrm{d}p_y'}{\mathrm{d}\tau'}=
    \frac{1}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \left[
        qE_y+q(v_zB_x-v_xB_z)
    \right]
$$
$$
    \frac{\mathrm{d}p_z'}{\mathrm{d}\tau'}=
    \frac{1}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \left[
        qE_z+q(v_xB_y-v_yB_x)
    \right]
$$
$$
    \frac{\mathrm{d}E'}{\mathrm{d}\tau'}=
    \frac{1}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \left[
        (\bm{v}\cdot q\bm{E})-
        V\{E_x+q(v_yB_z-v_zB_y)\}
    \right]
$$
これにより、力に関して以下の対応になっていることが再確認できる。
$$
    f_x'=
    \frac{1}{\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
    \left[
        qE_x'+q(v_y'B_z'-v_z'B_y')
    \right]
    \leftrightarrow
    f_x=
    \frac{1}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \left[
        qE_x+q(v_yB_z-v_zB_y)
    \right]
$$

$$
    f_y'=
    \frac{1}{\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
    \left[
        qE_y'+q(v_z'B_x'-v_x'B_z')
    \right]
    \leftrightarrow
    f_y=
    \frac{1}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \left[
        qE_y+q(v_zB_x-v_xB_z)
    \right]
$$
$$
    f_z'=
    \frac{1}{\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
    \left[
        qE_z'+q(v_x'B_y'-v_y'B_x')
    \right]
    \leftrightarrow
    f_z=
    \frac{1}{\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    \left[
        qE_z+q(v_xB_y-v_yB_x)
    \right]
$$
$$
    f_w'=
    \frac{1}{c\sqrt{1-\frac{\bm{v}'^2}{c^2}}}
    (\bm{v}'\cdot q\bm{E}')
    \leftrightarrow
    f_w=
    \frac{1}{c\sqrt{1-\frac{\bm{v}^2}{c^2}}}
    (\bm{v}\cdot q\bm{E})
$$









次に電荷 $q$ を持つ粒子が電場 $\bm{E}$ と磁場 $\bm{B}$ の中を運動する場合を考える。この粒子にはローレンツ力

$$
    \bm{F}=q(\bm{E}+\bm{v}\times\bm{B})
$$

がはたらく。重力と違い、磁場による力は速度 $\bm{v}$ に依存する。力の法則そのものは電磁気学で与えられるものとして、これを $\bm{f}=\gamma\bm{F}$ として運動方程式に入れると、$\mathrm{d}t/\mathrm{d}\tau$ を掛けて戻すことで

$$
    \frac{\mathrm{d}\bm{p}}{\mathrm{d}t}=
    q(\bm{E}+\bm{v}\times\bm{B})、
    \frac{\mathrm{d}E_K}{\mathrm{d}t}=
    q(\bm{E}\cdot\bm{v})
$$

となる。エネルギーの式で磁場の項が現れないのは、$(\bm{v}\times\bm{B})\cdot\bm{v}=0$ より、磁場による力は仕事をしないためである。ここでは $q$ は観測者によらない量とし、電場と磁場は粒子の運動の影響を受けずに与えられているものとする。

まず磁場だけがある場合（$\bm{E}=0$）を考える。$E_K$ が一定なので $|\bm{v}|$ も一定で、$\gamma$ も一定になる。したがって $m_0\gamma\,\mathrm{d}\bm{v}/\mathrm{d}t=q\bm{v}\times\bm{B}$ となり、$\bm{B}$ に垂直な面内で等速円運動をする。その角速度と半径は

$$
\omega=\frac{qB}{m_0\gamma}、\quad r=\frac{|\bm{p}|}{qB}
$$

である。速さが大きいほど、円運動の周期は長く、半径は大きくなる。

次に、一様な電場 $\bm{E}=(0,0,E)$ だけがある場合を考える。$t=0$ に位置 $z_0$ で初速度が 0 であるとすると、$\mathrm{d}p_z/\mathrm{d}t=qE$ より $p_z=qEt$ となり、重力の場合の $m_0g$ を $-qE$ に置き換えた形になる。そのため

$$
v_z=\frac{qEt/m_0}{\sqrt{1+\left(\dfrac{qEt}{m_0c}\right)^2}}、\quad z=z_0+\frac{m_0c^2}{qE}\left(\sqrt{1+\left(\frac{qEt}{m_0c}\right)^2}-1\right)
$$

が得られ、$v_z$ は $c$ を超えない。$qEt\ll m_0c$ では $v_z=qEt/m_0$、$z=z_0+qEt^2/(2m_0)$ となり、従来の結果に一致する。