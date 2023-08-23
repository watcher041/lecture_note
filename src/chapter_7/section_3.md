
## 相対論的力学

　Lotentz変換から速度の式を求めてみると
$$
    v_x'=\frac{v_x-V}{1-\frac{v_xV}{c^2}}、
    v_y'=\frac{v_y}{1-\frac{v_xV}{c^2}}\sqrt{1-\frac{V^2}{c^2}}、
    v_z'=\frac{v_z}{1-\frac{v_xV}{c^2}}\sqrt{1-\frac{V^2}{c^2}}
$$
となるが、ここで $v_x'$ に着目すると $v_x$ に対して以下の条件下でないと発散することが分かる。
$$
    v_x<\frac{c^2}{V}
$$
一方で $V$ に関しても、こちらも $c$ をこえると $\sqrt{1-V^2/c^2}$ が虚数となってしまうことから以下の条件になることも分かる。
$$
    V<c、v_x<c
$$
このことから、物体の速度というのは光速を超えることがなく、力が働いて加速しても光速で頭打ちになることがうかがえる。これは別の見方だと、速度が増すことで加速しにくくなる（質量が増す）ことになるため、質量が速度に依存しているともいえる。古典力学においても質量が速度（というより時間）に依存している場合は以下の方程式を解くことで運動を記述することができた。ここで $\boldsymbol{p}$ は運動量、$\boldsymbol{F}$ は外部からの力である。
$$
    \frac{{\rm d}\boldsymbol{p}}{{\rm d}t}=\boldsymbol{F}、
    \boldsymbol{p}=m\boldsymbol{v}
$$
今回もこれと同様の式が成立しているものとして、質量がどのように速度に依存しているか確認してみることにする。これについてはすでにN.LwisとC.Tolmanの論文において示されており、これでは外部の力がない状態において運動量が保存されることを利用して導いている。これによると
$$
    m(\boldsymbol{v})=\frac{m_0}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}
$$
というようになることがわかる。ここで $m_0$ は物体が静止しているときの質量としている。実際にこの形で確認してみると
$$
    \frac{{\rm d}\boldsymbol{p}'}{{\rm d}\tau'}=\frac{{\rm d}\boldsymbol{p}}{{\rm d}\tau}、
    \boldsymbol{f}'=\boldsymbol{f}、
    \left(
        \tau=
        t\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}、
        \boldsymbol{f}=
        \frac{\boldsymbol{F}}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}
    \right)
$$
となることが確認できる。ここで$\tau$というのは固有時と呼ばれるものとなり、

では、実際に速度がどうなるか等加速度運動を仮定して見てみると
$$
    \frac{{\rm d}\boldsymbol{p}}{{\rm d}t}=\boldsymbol{C}（定ベクトル）
$$
において、各成分は以下の通りとなる。
$$
    \frac{m_0 v_x}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}=C_x t、
    \frac{m_0 v_y}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}=C_y t、
    \frac{m_0 v_z}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}=C_z t
$$
すると、各成分の速度の二乗を足し合わせると以下の式が得られる。
$$
    \boldsymbol{v}^2=\frac{\frac{\boldsymbol{C}^2}{m_0^2}t^2}{1+\frac{\boldsymbol{C}^2}{m_0^2c^2}t^2}
$$
この式からもわかるように、加速し続けて時間が無限だけ経過しても光速になることがわかる。
また、仕事率（力と速度の内積）を求めてみると
$$
    \boldsymbol{F}\cdot\boldsymbol{v}=
    \frac{{\rm d}}{{\rm d}t}
    \left(\frac{m_0\boldsymbol{v}}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}\right)\cdot\boldsymbol{v}=
    \frac{{\rm d}}{{\rm d}t}\left(\frac{m_0c^2}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}\right)
$$
となることからエネルギーは以下のようになることがわかる。
$$
    E=\frac{m_0c^2}{\sqrt{1-\frac{\boldsymbol{v}^2}{c^2}}}=
    m_0c^2+\frac{1}{2}m_0\boldsymbol{v}^2+\cdots=mc^2
$$
このように、$v$ が $c$ に比べて低速の場合は静止エネルギーと古典力学での運動エネルギーとの和になることがわかる。
そのため、運動エネルギーは以下の式から導けることになる。
$$
    K=E-m_0c^2=\frac{1}{2}m_0\boldsymbol{v}^2+\cdots
$$

しかし、重力が関わってくるとうまく説明ができないという欠点がでてくる。