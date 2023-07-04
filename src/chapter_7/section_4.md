
## 相対論的電磁気学

電磁気学においては、以下のMaxwell方程式を用いて説明することができた。
$$
  \mathrm{div}\boldsymbol{D}=\rho、
  \mathrm{div}\boldsymbol{B}=0、
  \mathrm{rot}\boldsymbol{E}=-\frac{\partial \boldsymbol{B}}{\partial t}、
  \mathrm{rot}\boldsymbol{H}=\boldsymbol{i}+\frac{\partial \boldsymbol{D}}{\partial t}
$$

このうち、２番目と３番目の式に関して
$$
  \frac{\partial B_{x}}{\partial x}+\frac{\partial B_{y}}{\partial y}+\frac{\partial B_{z}}{\partial z}=0\\\\
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
    \frac{\partial B_z}{\partial z'}=\gamma\frac{V}{c^2}\frac{\partial B_x}{\partial t'}\\\\
    -\gamma V\frac{\partial B_{x}}{\partial x'}+
    \frac{\partial E_{z}}{\partial y'}-\frac{\partial E_{y}}{\partial z'}=
    -\gamma\frac{\partial B_{x}}{\partial t'}\\\\
    \frac{\partial E_{x}}{\partial z'}-
    \frac{\partial }{\partial x'}\gamma\left(E_{z}+VB_{y}\right)=
    -\frac{\partial }{\partial t'}\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)\\\\
    \frac{\partial }{\partial x'}\gamma\left(E_{y}-VB_{z}\right)-
    \frac{\partial E_{x}}{\partial  y'}=
    -\frac{\partial }{\partial t'}\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$
であるが、ここで1番目の式と2番目の式を
$$
    -\gamma V\frac{\partial B_x}{\partial x'}-
    V\frac{\partial B_y}{\partial y'}-
    V\frac{\partial B_z}{\partial z'}=-\gamma\frac{V^2}{c^2}\frac{\partial B_x}{\partial t'}\\\\
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
    \frac{\partial}{\partial z'}\gamma\left(B_z-\frac{V}{c^2}E_y\right)=0\\\\
    \frac{\partial}{\partial y'}\gamma(E_z+VB_y)-
    \frac{\partial}{\partial z'}\gamma(E_y-VB_z)=
    -\frac{\partial B_x}{\partial t'}\\\\
    \frac{\partial E_{x}}{\partial z'}-
    \frac{\partial }{\partial x'}\gamma\left(E_{z}+VB_{y}\right)=
    -\frac{\partial }{\partial t'}\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)\\\\
    \frac{\partial }{\partial x'}\gamma\left(E_{y}-VB_{z}\right)-
    \frac{\partial E_{x}}{\partial  y'}=
    -\frac{\partial }{\partial t'}\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$
これらの式から、以下の関係式が成り立つことがわかる。
$$
    E_{x'}=E_{x}、
    E_{y'}=\gamma\left(E_{y}-VB_{z}\right)、
    E_{z'}=\gamma\left(E_{z}+VB_{y}\right)\\\\
    B_{x'}=B_{x}、
    B_{y'}=\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)、
    B_{z'}=\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$