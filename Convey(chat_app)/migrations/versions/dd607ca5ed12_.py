"""empty message

Revision ID: dd607ca5ed12
Revises: cf65386631e2
Create Date: 2024-08-11 21:06:01.774494

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dd607ca5ed12'
down_revision = 'cf65386631e2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('acc_rooms', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user1', sa.Text(), nullable=False))
        batch_op.add_column(sa.Column('user2', sa.Text(), nullable=False))
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('acc_rooms', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.TEXT(), nullable=False))
        batch_op.drop_column('user2')
        batch_op.drop_column('user1')

    # ### end Alembic commands ###