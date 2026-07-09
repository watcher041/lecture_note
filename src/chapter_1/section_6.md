
## 見かけの運動

前回までは極座標を扱ってきたが、今度は一般的な回転座標だとどうなるかを見ていくことにする。まず原点を軸に座標系 $(x,y)$ を角度 $\alpha$ だけ回転させて座標系 $({x'},{y'})$ に変換したものとすると

<p align="center">
    <img width="50%" src="images/2d_r_rotate.png">
</p>

$$
    {x'}=x\cos\alpha+y\sin\alpha、
    {y'}=-x\sin\alpha+y\cos\alpha
$$

という変換式が成り立つ。そのため、速度を求めると以下の通りとなる。ここで、$\omega_\alpha=\dot{\alpha}$ と置いている。

$$
    v_{x'}=
    v_x\cos\alpha+v_y\sin\alpha-
    x\omega_\alpha\sin\alpha+
    y\omega_\alpha\cos\alpha=
    (v_x+y\omega_\alpha)\cos\alpha+
    (v_y-x\omega_\alpha)\sin\alpha
$$
$$
    v_{y'}=
    -v_x\sin\alpha+v_y\cos\alpha-
    x\omega_\alpha\cos\alpha-
    y\omega_\alpha\sin\alpha=
    -(v_x+y\omega_\alpha)\sin\alpha+
    (v_y-x\omega_\alpha)\cos\alpha
$$

極座標のときと違い、各成分に $\omega_\alpha$ に応じた成分が表れる。この項目は座標系が回転したことで、仮にもとの座標系で静止していたとしても動いているように見えたことによるものである。実際、元の座標系 $(x,y)$ で質点が静止（ $v_x=0,v_y=0$ ）とすると、

$$
    v_{x'}=
    y\omega_\alpha\cos\alpha-x\omega_\alpha\sin\alpha
$$
$$
    v_{y'}=
    -y\omega_\alpha\sin\alpha-x\omega_\alpha\cos\alpha
$$