
## 気体分子運動論

　まず初めに熱力学では気体の性質を調べるために、気体を容器の閉じ込めた上で熱力学の第１法則
$$
    \mathrm{d}U=
    \mathrm{d}'Q+\mathrm{d}'W=
    T\mathrm{d}S-P\mathrm{d}V
$$
を適用して話を進めていたが、分子が運動するものとした場合、まず壁に衝突による力（圧力）を及ぼすことが考えられる。そのため容器の壁に及ぼす圧力を考えると、圧力 $P$ は壁の単位面積が受ける力（撃力）の垂直成分の時間平均として定義される。そのため力の時間平均は分子の受ける力積の単位時間内総量に等しく、更にこれは運動量の変化の単位時間内総量に等しい。速さ $v$ の分子が壁に衝突して、**弾性的に反発されるとすれば**分子の運動量変化は壁に垂直に $2mv$ となる。そのため、単位時間当たりの力は以下のようになる。
$$
    \bar{F}=\frac{2mv_{\perp}}{\Delta t}
$$
この力が面 $\Delta S$ の中で働くため、数密度 $n$ とするとある速度においては
$$
    P(v_{\perp})=
    \frac{\overline{F}}{\Delta S}
    \left(
        nv_{\perp}\frac{1}{2}\Delta t
        \Delta S
    \right)=
    mv_{\perp}^2n
$$
であるため、全体的には速度の平均をとったものが圧力になる。ただし、上付き棒は $v>0$ なる $v$ についての平均を意味する。
$$
    P=\overline{P(v_{\perp})}=
    mn\overline{v_{\perp}^2}
$$
ここで、分子がどのような速度をとるか分布を知る必要がある。どのように大きさが変化するかは衝突によって変化するため、以降では衝突（エネルギーも運動エネルギーに加えてポテンシャルエネルギーもある）について考察していくことにする。

衝突によって速度の分布は各方向で等確率になる。→速度分布は各方向で同じ値になる。

　分子の速度は壁への衝突と分子同士の衝突により変化するものと考えられる。前者のほうは向きが反対向きになるだけであるため、後者の方がどうなるか見ていくことにする。


<!-- 例として、一つ目の分子1にもう一つの分子2が衝突する状況を考えると、各運動方程式は $\bm{r}=\bm{r}_2-\bm{r}_1、r=|\bm{r}_2-\bm{r}_1|$ として
$$
    m_1
    \frac{\mathrm{d}^2\bm{r}_1}{\mathrm{d}t^2}=
    \frac{\partial U(r)}{\partial r}
    \frac{\bm{r}}{r}、
    m_2
    \frac{\mathrm{d}^2\bm{r}_2}{\mathrm{d}t^2}=
    -\frac{\partial U(r)}{\partial r}
    \frac{\bm{r}}{r}
$$
であるが、これを変形して 
$$
    \frac{\mathrm{d}^2\bm{r}_1}{\mathrm{d}t^2}=
    \frac{1}{m_1}
    \frac{\partial U(r)}{\partial r}
    \frac{\bm{r}}{r}、
    \frac{\mathrm{d}^2\bm{r}_2}{\mathrm{d}t^2}=
    -\frac{1}{m_2}
    \frac{\partial U(r)}{\partial r}
    \frac{\bm{r}}{r}
$$
として両辺の差をとると
$$
    \mu\frac{\mathrm{d}^2\bm{r}}{\mathrm{d}t^2}=
    -\frac{\partial U(r)}{\partial r}
    \frac{\bm{r}}{r}、
    \left(
        \mu=\frac{m_1m_2}{m_1+m_2}
    \right)
$$
となる。これは動径方向と角度方向に分けることができ、
$$
    \bm{r}=r\bm{e}_r、
    \frac{\mathrm{d}\bm{r}}{\mathrm{d}t}=
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \bm{e}_r+
    r\frac{\mathrm{d}\theta}{\mathrm{d}t}
    \bm{e}_\theta、
    \frac{\mathrm{d}^2\bm{r}}{\mathrm{d}t^2}=
    \left[
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    r
    \left(
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
    \right]
    \bm{e}_r+
    \left[
    r
    \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right]
    \bm{e}_\theta
$$
であるから以下の通りとなる。
$$
    \mu
    \left[
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    r
    \left(
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right)^2
    \right]=
    -\frac{\partial U(r)}{\partial r}、
    \mu
    \left[
    r
    \frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}+
    2
    \frac{\mathrm{d}r}{\mathrm{d}t}
    \frac{\mathrm{d}\theta}{\mathrm{d}t}
    \right]=0
$$
2番目の式に $r$ をかけて整理することで、角運動量の保存則および動径方向の運動方程式が得られる。
$$
    L=\mu r^2
    \frac{\mathrm{d}\theta}{\mathrm{d}t}、
    \mu\frac{\mathrm{d}^2r}{\mathrm{d}t^2}-
    \frac{L^2}{\mu r^3}=
    -\frac{\partial U(r)}{\partial r}
$$
ここで、右辺を偏微分の形に
$$
    \mu
    \frac{\mathrm{d}^2r}{\mathrm{d}t^2}
    =
    -\frac{\partial}{\partial r}
    \left[
    \frac{L^2}{2\mu r^2}+U(r)
    \right]
$$
としてから無限大の彼方から $r$ で積分すると -->