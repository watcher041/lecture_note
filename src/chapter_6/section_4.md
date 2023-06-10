
## 相対論的電磁気学

電磁気学においては、以下のMaxwell方程式を用いて説明することができた。
$$
  \mathrm{div}\boldsymbol{D}=\rho、
  \mathrm{div}\boldsymbol{B}=0\\\\
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
と各成分ごとに書き下し、Lorentz変換を代入すると3番目と４番目から
$$
  \frac{\partial E_{x}}{\partial z'}-
  \frac{\partial }{\partial x'}\gamma\left(E_{z}+VB_{y}\right)=
  -\frac{\partial }{\partial t'}\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)
$$
$$
  \frac{\partial }{\partial x'}\gamma\left(E_{y}-VB_{z}\right)-
  \frac{\partial E_{x}}{\partial  z'}=
  -\frac{\partial }{\partial t'}\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$
であるから、
$$
    E_{x'}=E_{x}、
    E_{y'}=\gamma\left(E_{y}-VB_{z}\right)、
    E_{z'}=\gamma\left(E_{z}+VB_{y}\right)\\\\
    B_{x'}=B_{x}、
    B_{y'}=\gamma\left(B_{y}+\frac{V}{c^2}E_{z}\right)、
    B_{z'}=\gamma\left(B_{z}-\frac{V}{c^2}E_{y}\right)
$$
というようになることが考えられる。